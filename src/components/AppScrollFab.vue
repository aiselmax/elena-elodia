<template>
  <v-btn
    size="large"
    @click="scrollToSection"
    fab
    class="scroll-fab"
    :icon="icon"
  >
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { smoothScrollTo } from "@/utilities/smoothScrollTo";

export default defineComponent({
  name: "AppScrollFab",
  props: {
    currentSection: {
      type: String,
      required: true,
    },
  },
  computed: {
    sectionIds() {
      const sections = document.querySelectorAll("section[id]");
      return Array.from(sections).map((section) => section.id);
    },
  },
  data() {
    return {
      nextSectionId: this.currentSection,
      icon: "mdi-arrow-down",
    };
  },
  watch: {
    currentSection: function (newSectionId) {
      const index = this.sectionIds.indexOf(newSectionId);
      const nextIndex = index + 1;
      if (nextIndex >= this.sectionIds.length) {
        this.nextSectionId = this.sectionIds[0];
        this.icon = "mdi-arrow-up";
      } else {
        this.nextSectionId = this.sectionIds[nextIndex];
        this.icon = "mdi-arrow-down";
      }
    },
  },
  methods: {
    scrollToSection() {
      const section = document.getElementById(this.nextSectionId);
      if (section) smoothScrollTo(section);
    },
  },
});
</script>

<style scoped>
.scroll-fab {
  z-index: 9999999999;
  position: fixed;
  bottom: 20px;
  left: 94%;
  transform: translateX(-50%);
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
