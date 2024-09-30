<template>
  <app-headerback></app-headerback>
  <AppBanner></AppBanner>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Sie möchten mit einem Banner Aufmerksamkeit erregen und Ihre Zielgruppe ansprechen?"
    callToAction="Dann kontaktieren Sie mich noch heute und lassen Sie sich ein unverbindliches Angebot erstellen!"
    text="Ich bin ein erfahrener Designer und kenne mich mit den neuesten Trends und Techniken aus. Ich arbeite eng mit Ihnen zusammen, um Ihre Ziele zu verstehen und Banner zu erstellen, die perfekt zu Ihnen passen."
    subject="Grafikdesign"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppBanner from "@/components/AppBanner.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppBannerView",
  components: {
    AppHeaderback,
    AppBanner,
    AppContact,
  },
});
</script>
