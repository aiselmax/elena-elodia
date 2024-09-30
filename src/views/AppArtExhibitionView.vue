<template>
  <app-headerback></app-headerback>
  <AppArtExhibition></AppArtExhibition>
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
    title="Wollen Sie Ihre Ausstellung mit meinen Kunstbildern bereichern?"
    callToAction="Dann kontaktiere mich noch heute!"
    text="Ich bin immer offen für neue Ideen und bin gerne bereit, mit Ihnen zusammenzuarbeiten."
    subject="Art"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "@/components/AppHeaderBack.vue";
import AppArtExhibition from "@/components/AppArtExhibition.vue";
import AppContact from "@/components/AppContact.vue";
import AppCarousel from "@/components//AppCarousel.vue";
import { CarouselItem } from "@/types/CarouselItem";

export default defineComponent({
  name: "AppArtExhibitionView",
  components: {
    AppHeaderback,
    AppArtExhibition,
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
