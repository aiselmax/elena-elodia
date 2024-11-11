<template>
  <Transition :name="transitionClass">
    <v-card class="service-card" variant="elevated">
      <v-img :src="imagePath" height="260"></v-img>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        <ul style="list-style-type: none">
          <li v-for="item in convertedText" :key="item">
            <router-link :to="getLink(item)">
              <v-btn
                variant="plain"
                prepend-icon="mdi-arrow-right-bold-outline"
              >
                {{ item }}
              </v-btn>
            </router-link>
          </li>
        </ul>
      </v-card-text>
      <v-card-actions class="service-card-actions">
        <v-btn @click="scrollToSection(title)">referenzen</v-btn>
      </v-card-actions>
    </v-card>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { smoothScrollTo } from "@/utilities/smoothScrollTo";

export default defineComponent({
  name: "AppServiceCard",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    transitionClass: {
      type: String,
    },
  },
  computed: {
    //splits the text based on a comma and returns an array with the individual parts.
    convertedText(): string[] {
      return this.text.split(", ");
    },
    // returns the path to an image located in a directory named "icon" within the assets.
    imagePath(): string {
      return require(`@/assets/icon/${this.imageSrc}`);
    },
  },
  methods: {
    getLink(name: string): string {
      const umlauteMap: { [key: string]: string } = {
        ä: "ae",
        ö: "oe",
        ü: "ue",
        ß: "ss",
        Ä: "Ae",
        Ö: "Oe",
        Ü: "Ue",
      };
      const link = name
        .replace(/[äöüßÄÖÜ]/g, (match) => umlauteMap[match])
        .replace(/\s/g, "");
      return "/" + link;
    },

    scrollToSection(sectionId: string): void {
      const section = document.getElementById(sectionId);
      if (section) {
        smoothScrollTo(section);
      }
    },
  },
});
</script>

<style scoped>
.service-card {
  height: 110%;
  position: relative;
}
.service-card-actions {
  position: absolute;
  bottom: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease-out;
}
.slide-fade2-enter-active {
  transition: all 1.5s ease-out;
}
.slide-fade3-enter-active {
  transition: all 2s ease-out;
}
.slide-fade-enter-from,
.slide-fade2-enter-from,
.slide-fade3-enter-from {
  transform: translateY(50px);
}
</style>
