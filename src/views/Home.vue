<template>
  <div>
    <div class="jumbotron">
      <v-img
        alt="Pokemonote ポケモンをもっと楽しく！"
        class="shrink"
        src="@/assets/pokemonote.svg"
        transition="scale-transition"
        max-height="492"
        min-height="164"
      />
    </div>
    <v-container>
      <v-row class="d-flex my-sm-2">
        <v-col cols="12" md="6" class="d-flex order-md-2">
          <v-card class="flex-fill text-center m-auto">
            <h2 class="headline font-weight-bold ma-2 mb-3">人気のポケモン</h2>
            <v-list>
              <v-list-item
                v-for="(item, index) in $store.getters.ranking"
                :key="item.name"
              >
                <v-list-item-content>
                  <v-list-item-title align="left"
                    >{{ index + 1 }}位 {{ item.name }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="d-flex order-md-1">
          <v-card style="width: 100%">
            <h2 class="headline font-weight-bold ma-2 mb-3 text-center">
              更新情報
            </h2>
            <v-sheet class="body-1 overflow-y-auto" max-height="280">
              <div class="px-2">
                <div>
                  <h3>2021-04-30</h3>
                  <p>『Pokemonote』プロトタイプを公開しました。</p>
                </div>
              </div>
              <div class="px-2">
                <div>
                  <h3>2021-11-18</h3>
                  <p>『Pokemonote』α版を公開しました。</p>
                </div>
              </div>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <h2 class="headline font-weight-bold ma-2 mb-3 text-center">
              Pokemonoteについて
            </h2>
            <div class="px-2 pt-2 pb-1">
              <p>
                当サイトは、個人の運営するファンサイトであり、株式会社ポケモンや任天堂、その他各企業様とは一切関係ありません。
              </p>
              <p>
                ポケットモンスター・ポケモン・Pokémonは任天堂・クリーチャーズ・ゲームフリークの登録商標です。
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import { updateRanking } from "@/utils/store";

export default defineComponent({
  setup() {
    (async () => {
      try {
        const response = await axios.get("/top");
        updateRanking(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  },
});
</script>

<style lang="scss" scoped>
h3 {
  padding: 3px 0px;
  margin-bottom: 3px;
  border-bottom: double 5px #90caf9;
}
</style>
