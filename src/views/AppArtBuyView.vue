<template>
  <app-headerback></app-headerback>
  <AppArtBuy></AppArtBuy>
  <App-carousel
    :key="title"
    :carouselItems="pictures"
    :title="title"
    :text="text"
    :isIntersecting="true"
  />
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Bist du auf der Suche nach einem einzigartigen Kunstwerk für dein Zuhause?"
    callToAction="Dann entdecke jetzt meine Kunstwerke und finde das perfekte Bild für dein Zuhause!"
    text="Jetzt unverbindlich anfragen und dein Zuhause verschönern!"
    subject="Art"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "@/components/AppHeaderBack.vue";
import AppArtBuy from "@/components/AppArtBuy.vue";
import AppContact from "@/components/AppContact.vue";
import AppCarousel from "@/components//AppCarousel.vue";
import { CarouselItem } from "@/types/CarouselItem";

export default defineComponent({
  name: "AppArtBuyView",
  components: {
    AppHeaderback,
    AppArtBuy,
    AppContact,
    AppCarousel,
  },
  data() {
    return {
      title: "Gallerie",
      text: "Ich bin mir sicher, dass du in meiner Galerie ein Bild finden wirst, das dich berührt. Ich freue mich darauf, dir meine Kunstwerke zu zeigen.",
      pictures: [
        {
          src: "art/03_art.webp",
          title: "Baum des Lebens, 2017, Aquarell",
        },
        {
          src: "art/04_art.webp",
          title: "Breaking through to the other side, 2013, Markers, Fineliner",
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
    };
  },
});
</script>
