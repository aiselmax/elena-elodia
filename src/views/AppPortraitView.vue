<template>
  <app-headerback></app-headerback>
  <AppPortrait></AppPortrait>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Wünschst du dir ein einzigartiges Portrait von dir oder einem geliebten Menschen?"
    callToAction="Kontaktiere mich noch heute und lass uns dein ganz persönliches Portraitprojekt besprechen!"
    text="Ob du ein Geschenk für einen geliebten Menschen suchst, ein Portrait für deine Website oder ein persönliches Kunstwerk für dein Zuhause, ich bin mir sicher, dass ich das perfekte Portrait für dich anfertigen kann."
    subject="Illustration"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppPortrait from "@/components/AppPortrait.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppPortraitView",
  components: {
    AppHeaderback,
    AppPortrait,
    AppContact,
  },
});
</script>
