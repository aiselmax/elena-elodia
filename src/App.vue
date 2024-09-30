<template>
  <v-app>
    <v-main>
      <router-view></router-view>
      <app-footer></app-footer>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "./components/AppFooter.vue";
import { useHead } from "@unhead/vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      //
    };
  },
  components: {
    AppFooter,
  },
  created() {
    useHead({
      title:
        "Elena Elodia - Grafikdesigner, Illustrator und Künstlerin aus Dresden",
      htmlAttrs: {
        lang: "de",
      },
      meta: [
        {
          name: "author",
          content: "Elena Ischtschenko",
        },
        {
          name: "og:title",
          content:
            "Elena Elodia - Grafikdesigner, Illustrator und Künstlerin aus Dresden",
        },
        {
          name: "og:description",
          content:
            "Professionelle Gestaltung, Corporatedesign, Firmenlogos, Visitenkarten, Flyer, Broschüre, Plakate, Kataloge, Coverdesign, Illustrationen",
        },
        {
          name: "og:image",
          content: new URL("@/assets/foto.webp", import.meta.url).href,
        },
        {
          name: "description",
          content:
            "Professionelle Gestaltung &#10144; Corporatedesign &#10003; Firmenlogos &#10003; Visitenkarten &#10003; Flyer &#10003; Broschüre &#10003; Plakate &#10003; Kataloge &#10003; Coverdesign &#10003; Illustrationen",
        },
        {
          name: "keywords",
          content:
            "Banner, Bildbearbeitung, Buchgestaltung, Corporatedesign, Corporate identity, Designer, Designentwicklung, Designleistungen, Designkozept, Firmenlogo, Flyer, Gestaltung, Grafikdesign, Grafikdesigner, Grafik, Illustration, Illustrationen, Illustrator, Broschüren, Design, Designerin, Infografik, Logodesign, Logogestalltung, Logos, Printmediengestalltung, Prospekte, Zeichnung, Grafik-Designer, Grafik-Service, Katalog, InDesign, Katalogerstellung, Print Design, Visitenkarten, Plakaten, Coverdesign, Portraitillustrationen, Buchillustrationen, digitale Illustrationen, Künstler, Malerei, Elena, Elodia, Ischtschenko",
        },
      ],
    });
  },
});
</script>
