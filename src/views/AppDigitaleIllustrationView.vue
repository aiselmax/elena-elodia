<template>
  <app-headerback></app-headerback>
  <AppDigitaleIllustration></AppDigitaleIllustration>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Bist du auf der Suche nach einzigartigen digitalen Illustrationen?"
    callToAction="Jetzt unverbindlich anfragen und deine Idee in die Tat umsetzen!"
    text="Wenn du auf der Suche nach digitalen Illustrationen bist, die deine Botschaft vermitteln, deine Produkte oder Dienstleistungen bewerben oder einfach nur deine Augen erfreuen, dann bin ich der richtige Ansprechpartnerin für dich."
    subject="Illustration"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppDigitaleIllustration from "@/components/AppDigitaleIllustration.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppDigitaleIllustrationView",
  components: {
    AppHeaderback,
    AppDigitaleIllustration,
    AppContact,
  },
});
</script>
