<template>
  <v-card>
    <v-card-title>
      {{ title }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table
      class="pokemon-table"
      :headers="headers"
      :items="pokemonTable"
      :search="search"
      :loading="!pokemons.length"
      loading-text="Now Loading..."
    >
      <!-- レベルがnullの場合、レベルを1として表示する -->
      <template v-slot:[`item.lv`]="{ item }">
        {{ formatLv(item.lv) }}
      </template>
      <!-- ステータスにコピペボタンを追加する -->
      <template v-slot:[`item.stats`]="{ item }">
        {{ item.stats }}
        <v-icon small @click="writeToClipboard(item.stats)"
          >mdi-content-copy</v-icon
        >
      </template>
      <!-- ポケモン名にリンクを設定する -->
      <template v-slot:[`item.name`]="{ item }">
        <router-link :to="`/pokemons/${item.id}`">
          {{ item.name }}
        </router-link>
      </template>
      <template v-slot:[`item.user.nickname`]="{ item }">
        <!-- マイページのときは、編集・削除ボタンを表示する -->
        <div v-if="item.user.username === authUserName">
          <v-icon @click="editPokemon(item)"> mdi-pencil </v-icon>
          <v-icon @click="deletePokemon(item.id)" class="ml-3">
            mdi-delete
          </v-icon>
        </div>
        <!-- マイページでないときは、ユーザー名にリンクを設定する -->
        <div v-else>
          <router-link :to="`/users/${item.user.username}`">
            {{ item.user.nickname }}
          </router-link>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { computed, defineComponent, ref, PropType } from "@vue/composition-api";
import axios from "axios";
import router from "@/router";
import { authUserName } from "@/utils/store";
import { Pokemon } from "@/types/index";

interface Props {
  title: string;
  pokemons: Pokemon[];
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    pokemons: {
      type: [] as PropType<Pokemon[]>,
      required: false,
      default: () => [],
    },
  },
  setup(props: Props) {
    const search = ref<string>();

    const headers = computed(() => {
      let tableHeader = [
        { text: "ポケモン名", sortable: false, value: "name" },
        { text: "レベル", sortable: false, value: "lv" },
        { text: "性格", sortable: false, value: "nature" },
        { text: "ステータス", sortable: false, value: "stats" },
        { text: "投稿者", sortable: false, value: "user.nickname" },
      ];
      if (props.title === "マイページ") {
        tableHeader[4].text = "編集・削除";
      }
      return tableHeader;
    });

    const pokemonTable = computed(() => {
      return props.pokemons;
    });

    const writeToClipboard = (clipText: string): void => {
      navigator.clipboard.writeText(clipText).catch((e) => {
        console.error(e);
      });
    };

    const formatLv = (lv: number | null): number => {
      if (!lv) return 1;
      return lv;
    };

    const editPokemon = (pokemon: Pokemon): void => {
      if (pokemon.user.username === authUserName.value) {
        router.push(`/pokemons/${pokemon.id}/edit`);
      } else {
        router.push("/");
      }
    };

    const deletePokemon = async (id: number): Promise<void> => {
      try {
        await axios.delete(`/pokemons/${id}`);
        // 削除するポケモンのデータを探す
        const deletePokemon = pokemonTable.value.findIndex(
          (pokemon: Pokemon) => pokemon.id === id
        );
        // 配列から要素を削除
        pokemonTable.value.splice(deletePokemon, 1);
      } catch (error) {
        console.log(error);
        router.push("/");
      }
    };
    return {
      authUserName,
      headers,
      pokemonTable,
      search,
      deletePokemon,
      editPokemon,
      formatLv,
      writeToClipboard,
    };
  },
});
</script>

<style lang="scss">
.pokemon-table .v-data-table__mobile-table-row {
  line-height: 2em;
}

.pokemon-table .v-data-table__mobile-row {
  flex-direction: column;
  align-items: flex-start;
}
</style>
