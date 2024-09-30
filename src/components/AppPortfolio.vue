<template>
  <section :id="id">
    <AppParallax :title="pageTitle" />

    <v-container>
      <App-carousel
        v-for="item in items"
        :key="item.title"
        :carouselItems="item.pictures"
        :title="item.title"
        :text="item.text"
        :isIntersecting="isIntersecting"
      />
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppParallax from "./AppParallax.vue";
import AppCarousel from "./AppCarousel.vue";
import { CarouselItem } from "@/types/CarouselItem";

export default defineComponent({
  name: "AppPortfolio",
  components: {
    AppParallax,
    AppCarousel,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    currentSection: {
      type: String,
      required: true,
    },
  },
  watch: {
    currentSection: function (newSectionId) {
      if (newSectionId === this.id) {
        this.isIntersecting = true;
      }
    },
  },
  data() {
    return {
      pageTitle: "Portfolio",
      isIntersecting: false,
      items: [
        {
          title: "Grafikdesign",
          text: "Vom Aufbau Ihres einzigartigen Corporate Designs über die Gestaltung von Firmenlogos, Visitenkarten, Flyern, Broschüren, Plakaten bis hin zu Katalogen und ansprechendem Coverdesign - meine Expertise im Grafikdesign wird Ihre Marke hervorheben und beeindrucke",
          pictures: [
            {
              src: "design/01_design.webp",
              title: "Logo - und Flyergestaltung",
            },
            { src: "design/02_design.webp", title: "Kataloggestaltung" },
            {
              src: "design/03_design.webp",
              title: "Logo - und Visitenkartengestaltung",
            },
            {
              src: "design/04_design.webp",
              title: "Covergestaltung, Bildbearbeitung",
            },
            { src: "design/05_design.webp", title: "Kataloggestaltung" },
            {
              src: "design/06_design.webp",
              title: "Covergestaltung, Bildbearbeitung",
            },
            {
              src: "design/07_design.webp",
              title: "Firmenlogo",
            },
          ] as CarouselItem[],
        },
        {
          title: "Illustration",
          text: "Mit meiner Leidenschaft für Illustrationen kann ich Ihre Ideen in fesselnde Kunstwerke verwandeln. Ob Portraitillustrationen, Buchillustrationen oder andere digitale Illustrationen, ich werde Ihre Geschichten zum Leben erwecken.",
          pictures: [
            { src: "ill/01_illustration.webp", title: "Millennial Frida" },
            { src: "ill/02_illustration.webp", title: "Rasta Audrey" },
            { src: "ill/03_illustration.webp", title: "Alternative Marilyn" },
            {
              src: "ill/04_illustration.webp",
              title: "Logo für einen Eisladen",
            },
            {
              src: "ill/05_illustration.webp",
              title: "Mund- und Nasenmasken für eine Textilmanufaktur",
            },
            { src: "ill/06_illustration.webp", title: "Portraitillustration" },
            { src: "ill/07_illustration.webp", title: "Portraitillustration" },
            { src: "ill/08_illustration.webp", title: "Portraitillustration" },
            { src: "ill/09_illustration.webp", title: "Kinderbuch" },
            { src: "ill/10_illustration.webp", title: "Kinderbuch" },
            { src: "ill/11_illustration.webp", title: "Kinderbuch" },
          ] as CarouselItem[],
        },
        {
          title: "Art",
          text: "Entdecken Sie meine einzigartigen Kunstwerke, die zum Kauf und zur Ausstellung verfügbar sind. Sie können auch individuelle Kunstwerke nach Ihren Wünschen in Auftrag geben, um Ihr Zuhause oder Ihr Büro mit persönlicher Kunst zu bereichern.",
          pictures: [
            {
              src: "art/03_art.webp",
              title: "Baum des Lebens, 2017, Aquarell",
            },
            {
              src: "art/04_art.webp",
              title:
                "Breaking through to the other side, 2013, Markers, Fineliner",
            },
            {
              src: "art/05_art.webp",
              title: "Zodiac, 2015, Copic Markers, Fineliner",
            },
            { src: "art/06_art.webp", title: "Morgenwesen, 2013, Acryl" },
            {
              src: "art/07_art.webp",
              title: "Geburt der Hamadryaden, 2015, Copic Markers, Fineliner",
            },
            {
              src: "art/08_art.webp",
              title: "Dryade, 2015, Copic Markers, Fineliner",
            },
            {
              src: "art/09_art.webp",
              title: "Mad tea party, 2013, Markers, Fineliner",
            },
            {
              src: "art/01_art.webp",
              title: "Garuda over New Crobuzon, 2019, digital",
            },
            {
              src: "art/02_art.webp",
              title: "Just Survive Somehow, 2018, digital",
            },
          ] as CarouselItem[],
        },
      ],
    };
  },
});
</script>
