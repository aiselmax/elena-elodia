<template>
  <app-headerback></app-headerback>
  <AppCorporateDesign></AppCorporateDesign>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Möchten Sie ein Corporate Design, das Ihre Marke einzigartig macht?"
    callToAction="Dann kontaktieren Sie mich jetzt und lassen Sie sich ein unverbindliches Angebot erstellen!"
    text="Ich erstelle für Sie ein Corporate Design, das Ihre Marke einzigartig macht und Ihre Ziele unterstützt. Ich berücksichtige dabei Ihre Unternehmensphilosophie, Ihre Zielgruppe und Ihre Marktposition."
    subject="Grafikdesign"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppCorporateDesign from "@/components/AppCorporateDesign.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppCorporateDesignView",
  components: {
    AppHeaderback,
    AppCorporateDesign,
    AppContact,
  },
});
</script>
