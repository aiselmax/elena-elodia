<template>
  <app-headerback></app-headerback>
  <AppCatalog></AppCatalog>
  <AppContact
    currentSection="contact"
    id="contact"
    :isLandingpage="true"
    title="Möchten Sie Ihren Katalog in neuem Glanz erstrahlen lassen?"
    callToAction="Dann lassen Sie mich Ihren Katalog gestalten und Ihre Kunden überzeugen!"
    text="Ich helfe Ihnen dabei, einen Katalog zu erstellen, der Ihre Produkte und Dienstleistungen in einem ansprechenden und informativen Format präsentiert. Kontaktieren Sie mich noch heute, um ein kostenloses Beratungsgespräch zu vereinbaren."
    subject="Grafikdesign"
  ></AppContact>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeaderback from "../components/AppHeaderBack.vue";
import AppCatalog from "@/components/AppCatalog.vue";
import AppContact from "@/components/AppContact.vue";

export default defineComponent({
  name: "AppCatalogView",
  components: {
    AppHeaderback,
    AppCatalog,
    AppContact,
  },
});
</script>
