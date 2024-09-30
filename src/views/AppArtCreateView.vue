<template>
  <app-headerback></app-headerback>
  <AppArtCreate></AppArtCreate>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Bist du auf der Suche nach einem einzigartigen Kunstwerk für dein Zuhause?"
    callToAction="Dann entdecke jetzt meine Kunstwerke und finde das perfekte Bild für dein Zuhause!"
    text="Jetzt unverbindlich anfragen und dein Zuhause verschönern!"
    subject="Art"
    artItem="individuellesKunstwerk"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "@/components/AppHeaderBack.vue";
import AppArtCreate from "@/components/AppArtCreate.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppArtCreateView",
  components: {
    AppHeaderback,
    AppArtCreate,
    AppContact,
  },
});
</script>
