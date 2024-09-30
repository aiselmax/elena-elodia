vue
<template>
  <v-list>
    <v-list-item>
      <v-list-item-title>
        <p class="text-h6"><v-icon>mdi-check</v-icon> {{ aboutItem.title }}</p>
      </v-list-item-title>
      <v-list-item-title>{{ aboutItem.type }}</v-list-item-title>
      <v-list-item-subtitle>{{ aboutItem.subtitle }}</v-list-item-subtitle>
      <v-list-item-subtitle>{{ aboutItem.date }}</v-list-item-subtitle>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AboutItem } from "@/types/AboutItem";

export default defineComponent({
  name: "AppAboutItem",
  props: {
    aboutItem: {
      type: Object as () => AboutItem,
      required: true,
    },
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 2s ease;
}

.fade3-enter-active,
.fade3-leave-active {
  transition: opacity 3s ease;
}

.fade4-enter-active,
.fade4-leave-active {
  transition: opacity 4s ease;
}

.fade-enter-from,
.fade2-enter-from,
.fade3-enter-from,
.fade4-enter-from,
.fade-leave-to,
.fade2-leave-to,
.fade3-leave-to,
.fade4-leave-to {
  opacity: 0;
}
</style>
