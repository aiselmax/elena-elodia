vue
<template>
  <v-parallax height="400" src="@/assets/paralax.png">
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white text-h2"
    >
      {{ title.toUpperCase() }}
    </div>
  </v-parallax>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppParalax",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
