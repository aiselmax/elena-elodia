<template>
  <app-headerback></app-headerback>
  <AppCoverdesign></AppCoverdesign>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Willst du ein Coverdesign, das deine Leser begeistert?"
    callToAction="Lass mich dir helfen!"
    text="Ich bin ein professioneller Coverdesigner und helfe dir dabei, das perfekte Cover für dein Buch zu finden. Ich arbeite mit dir zusammen, um ein Design zu erstellen, das deinen Stil und deine Botschaft widerspiegelt. Fordere jetzt dein unverbindliches Angebot an und überzeuge dich selbst von meiner Arbeit!"
    subject="Grafikdesign"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppCoverdesign from "@/components/AppCoverdesign.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppCoverdesignView",
  components: {
    AppHeaderback,
    AppCoverdesign,
    AppContact,
  },
});
</script>
