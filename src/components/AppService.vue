vue
<template>
  <section :id="id">
    <AppParallax :title="pageTitle" />
    <v-container class="my-15 py-15">
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="6"
          lg="4"
          class="my-15"
        >
          <AppServiceCard
            :imageSrc="card.img"
            :title="card.title"
            :text="card.text"
            :transitionClass="card.transitionClass"
            v-show="isIntersecting"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppParallax from "./AppParallax.vue";
import AppServiceCard from "./AppServiceCard.vue";

export default defineComponent({
  name: "AppService",
  components: {
    AppParallax,
    AppServiceCard,
  },
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
      }
    },
  },
  data() {
    return {
      pageTitle: "LEISTUNGEN",
      cards: [
        {
          img: "graphic.webp",
          title: "Grafikdesign",
          text: "Corporatedesign, Firmenlogo, Visitenkarten, Flyer, Broschüren, Banner, Katalogen, Coverdesign",
          transitionClass: "slide-fade",
        },
        {
          img: "illustration.webp",
          title: "Illustration",
          text: "Portraitillustrationen, Buchillustrationen, digitale Illustrationen",
          transitionClass: "slide-fade2",
        },
        {
          img: "art.webp",
          title: "Art",
          text: "Kaufen, Ausstellen, Erschaffen",
          transitionClass: "slide-fade3",
        },
      ],
      isIntersecting: false,
    };
  },
});
</script>

<style scoped></style>
