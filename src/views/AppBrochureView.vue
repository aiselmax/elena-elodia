<template>
  <app-headerback></app-headerback>
  <AppBrochure></AppBrochure>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Brauchen Sie eine Broschüre, die Ihre Kunden überzeugt?"
    callToAction="Dann sind Sie bei mir genau richtig! Ich bin Grafikdesigner und ich helfe Ihnen dabei, eine Broschüre zu erstellen, die überzeugt."
    text="Ich bin mir sicher, dass ich Sie mit meiner Arbeit überzeugen kann. Fordern Sie jetzt ein kostenloses Angebot an!"
    subject="Grafikdesign"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppBrochure from "@/components/AppBrochure.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppBrochureView",
  components: {
    AppHeaderback,
    AppBrochure,
    AppContact,
  },
});
</script>
