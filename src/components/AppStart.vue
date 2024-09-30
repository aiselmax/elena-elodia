<template>
  <v-parallax src="@/assets/Background240.webp" height="100vh">
    <v-container :id="id" tag="section">
      <v-row no-gutters style="height: 100vh" align="center">
        <v-col cols="12" align="center">
          <v-img
            src="@/assets/Logo_zentral.webp"
            alt="Logo"
            class="logo"
            :width="360"
            aspect-ratio="1/1"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppStart",
  props: {
    currentSection: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  watch: {
    currentSection: function (newSectionId) {
      if (newSectionId === this.id) {
        this.isIntersecting = true;
      } else {
        this.isIntersecting = false;
      }
    },
  },
  data() {
    return {
      isIntersecting: true,
    };
  },
});
</script>
