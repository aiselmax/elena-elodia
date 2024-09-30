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
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
      class="d-md-none"
    ></v-app-bar-nav-icon>
    <v-container class="d-none d-sm-flex justify-space-evenly">
      <v-btn
        v-for="(item, i) in menuItems"
        :key="i"
        :data-text="item.id"
        variant="text"
        size="x-large"
        @click="scrollToSection(item.id)"
        :ripple="false"
        class="menuitem"
        >{{ item.text }}</v-btn
      >
    </v-container>
  </v-app-bar>
  <!-- Add a navigation bar -->
  <v-navigation-drawer v-model="drawer" location="bottom" temporary>
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.id"
        @click="scrollToSection(item.id)"
      >
        {{ item.text }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- Navigation bar ends -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { smoothScrollTo } from "@/utilities/smoothScrollTo";

interface MenuItem {
  id: string;
  text: string;
}

export default defineComponent({
  name: "AppHeader",
  data() {
    return {
      drawer: false,
      menuItems: [
        { id: "home", text: "HOME" },
        { id: "about", text: "ÜBER MICH" },
        { id: "service", text: "LEISTUNGEN" },
        { id: "portfolio", text: "PORTFOLIO" },
        { id: "contact", text: "KONTAKT" },
      ] as MenuItem[],
    };
  },
  methods: {
    scrollToSection(sectionId: string) {
      const section = document.getElementById(sectionId);
      if (section) {
        smoothScrollTo(section);
        setTimeout(() => {
          if (this.needsScrolling(section)) {
            smoothScrollTo(section);
          }
        }, 1000);
      }
    },

    needsScrolling(section: HTMLElement): boolean {
      const targetPosition = section.offsetTop;
      const distanceToScroll = targetPosition - window.pageYOffset;
      return distanceToScroll > 1;
    },
  },
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
