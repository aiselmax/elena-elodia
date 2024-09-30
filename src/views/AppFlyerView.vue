<template>
  <app-headerback></app-headerback>
  <AppFlyer></AppFlyer>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Möchten Sie einen Flyer, der Ihre Zielgruppe überzeugt?"
    callToAction="Dann kontaktieren Sie mich jetzt und ich erstelle Ihren Flyer nach Ihren Wünschen!"
    text="Ihr Flyer ist das Aushängeschild Ihres Unternehmens oder Ihrer Dienstleistung. Er ist der erste Eindruck, den Ihre Zielgruppe von Ihnen bekommt. Daher ist es wichtig, dass Ihr Flyer ansprechend und informativ ist. Ich gestalte Ihren Flyer so, dass er die gewünschte Wirkung erzielt."
    subject="Grafikdesign"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppFlyer from "@/components/AppFlyer.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppFlyerView",
  components: {
    AppHeaderback,
    AppFlyer,
    AppContact,
  },
});
</script>
