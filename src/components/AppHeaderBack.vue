<template>
  <v-app-bar
    scroll-behavior="elevate"
    image="@/assets/header.webp"
    fixed
    color="primary"
  >
    <template v-slot:image>
      <v-img src="@/assets/header.webp"></v-img>
    </template>
    <v-container class="d-sm-flex">
      <router-link to="/"
        ><v-btn
          variant="plain"
          size="x-large"
          :ripple="false"
          class="menuitem active"
        >
          <v-icon start icon="mdi-arrow-left-bold-outline"></v-icon>
          Zurück</v-btn
        >
      </router-link>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
});
</script>

<style scoped>
.menuitem {
  color: lightgray;
  text-decoration: none;
  font-size: 1.5em;
  padding: 5px 20px;
  transition: 1s;
}

.menuitem:hover {
  color: white;
}

.active {
  color: white;
  font-size: 1.7em;
}
</style>
