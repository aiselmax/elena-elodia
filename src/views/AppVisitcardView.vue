<template>
  <app-headerback></app-headerback>
  <AppVisitcard></AppVisitcard>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Wollen Sie mit Ihren Visitenkarten überzeugen?"
    callToAction="Dann fordern Sie jetzt Ihr unverbindliches Angebot an und überzeugen Sie sich selbst von meiner Arbeit."
    text="Lassen Sie Ihre Visitenkarten von einem erfahrenen Designer gestalten. Ich biete Ihnen ein professionelles und hochwertiges Design, das zu Ihrem Unternehmen und Ihrer Zielgruppe passt."
    subject="Grafikdesign"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppVisitcard from "@/components/AppVisitcard.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppVisitcardView",
  components: {
    AppHeaderback,
    AppVisitcard,
    AppContact,
  },
});
</script>
