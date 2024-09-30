<template>
  <app-headerback></app-headerback>
  <AppBuchillustration></AppBuchillustration>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Möchtest du dein Buch mit einzigartigen Illustrationen aufwerten?"
    callToAction="Jetzt Kontakt aufnehmen und unverbindliches Angebot anfordern!"
    text="Ich erstelle individuelle Buchillustrationen für Kinderbücher, Romane, Sachbücher und mehr. Meine Illustrationen sind detailliert und ausdrucksstark und passen perfekt zum Inhalt deines Buches.
          Ich arbeite mit dir zusammen, um deine Vorstellungen zu verwirklichen.  Möchtest du mehr über meine Arbeit erfahren? Dann melde dich bei mir! Ich freue mich auf deine Anfrage."
    subject="Illustration"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppBuchillustration from "@/components/AppBuchillustration.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppBuchillustrationView",
  components: {
    AppHeaderback,
    AppBuchillustration,
    AppContact,
  },
});
</script>
