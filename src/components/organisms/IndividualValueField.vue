<template>
  <v-col class="d-flex justify-center">
    <div>
      <v-text-field
        ref="individualValueRef"
        type="tel"
        label="個体値"
        placeholder="0"
        :value="stats[statsIndex].individualValue"
        @input="updateIndividualValue($event, statsIndex)"
        persistent-placeholder
      />
    </div>
    <div>
      <CalcButton
        :buttonText="String(MAX_IV)"
        class="mb-1 btn-min-xs"
        @click.native="updateIndividualValue(MAX_IV, statsIndex)"
      />
      <br />
      <CalcButton
        buttonText="0"
        class="btn-min-xs"
        @click.native="updateIndividualValue(null, statsIndex)"
      />
    </div>
  </v-col>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "@vue/composition-api";
import { CalcButton } from "@/components/molecules";
import { LazyValue, Stat } from "@/types";
import { convertToHalfWidthInteger } from "@/utils/calc";
import { MAX_IV } from "@/utils/constants";

export default defineComponent({
  components: {
    CalcButton,
  },
  props: {
    stats: {
      type: [] as PropType<Stat[]>,
      required: true,
    },
    statsIndex: {
      type: Number,
      required: true,
    },
  },
  setup(_, { emit }) {
    const individualValueRef = ref<LazyValue>();

    const updateIndividualValue = (
      value: string | number,
      index: number
    ): void => {
      const formatValue = convertToHalfWidthInteger(String(value), MAX_IV);

      individualValueRef.value.lazyValue = formatValue;
      emit("updateIndividualValue", formatValue, index);
    };

    return {
      MAX_IV,
      individualValueRef,
      updateIndividualValue,
    };
  },
});
</script>
