<template>
  <section :id="id">
    <App-parallax :title="pageTitle" v-if="!isLandingpage" />
    <v-container>
      <v-card>
        <v-card-text>
          <div class="my-5">
            <div class="text-h4 my-5">{{ title }}</div>
            <p>{{ callToAction }}</p>
            <AppSocialmedia :isIntersecting="isIntersecting" />
            <p>{{ text }}</p>
          </div>
          <AppContactForm />
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppParallax from "./AppParallax.vue";
import AppContactForm from "./AppContactForm2.vue";
import AppSocialmedia from "./AppSocialmedia.vue";

export default defineComponent({
  name: "AppContact",
  components: {
    AppParallax,
    AppContactForm,
    AppSocialmedia,
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
    isLandingpage: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Haben Sie eine Idee für ein Projekt?",
    },
    callToAction: {
      type: String,
      default:
        "Dann kontaktieren Sie mich für kreative Lösungen, die Ihre Vision zum Leben erwecken! Ich biete Ihnen ein breites Spektrum an Leistungen, von Grafikdesign über Illustrationen bis hin zu Kunstwerken.",
    },
    text: {
      type: String,
      default:
        "Ich freue mich darauf, mit Ihnen zusammenzuarbeiten und Ihre Projekte zu realisieren. Kontaktieren Sie mich noch heute, um Ihre kreativen Ideen zu besprechen und herauszufinden, wie ich Ihnen helfen kann, Ihre Ziele zu erreichen.",
    },
    subject: String,
    artItem: String,
  },
  created() {
    if (this.isLandingpage) this.isIntersecting = true;
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
      pageTitle: "Kontakt",
      isIntersecting: false,
    };
  },
});
</script>
