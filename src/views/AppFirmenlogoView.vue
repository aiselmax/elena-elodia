<template>
  <app-headerback></app-headerback>
  <AppFirmenlogo></AppFirmenlogo>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Möchten Sie ein Logo, das Ihre Marke widerspiegelt?"
    callToAction="Kontaktieren Sie mich noch heute für ein kostenloses Beratungsgespräch."
    text="Wenn Sie ein Logo suchen, das professionell, einprägsam und ansprechend ist, dann sind Sie bei mir an der richtigen Adresse. Ich bin ein erfahrener Grafikdesigner, der sich auf die Erstellung von Logos für Unternehmen aus allen Branchen spezialisiert hat. Ich verstehe, dass jedes Unternehmen einzigartig ist, und ich arbeite eng mit Ihnen zusammen, um ein Logo zu erstellen, das Ihre Marke und Ihre Werte widerspiegelt. Ich biete Ihnen eine Vielzahl von Optionen, damit Sie das perfekte Logo für Ihre Bedürfnisse finden können."
    subject="Grafikdesign"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppFirmenlogo from "@/components/AppFirmenlogo.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppFirmenlogoView",
  components: {
    AppHeaderback,
    AppFirmenlogo,
    AppContact,
  },
});
</script>
