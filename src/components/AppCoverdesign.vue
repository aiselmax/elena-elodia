<template>
  <v-container>
    <v-card class="mt-5 py-5">
      <v-card-title><h1>Coverdesign</h1></v-card-title>
      <v-card-text class="my-5">
        <p>
          Das Coverdesign spielt eine entscheidende Rolle in der Welt der
          visuellen Gestaltung, insbesondere in den Bereichen Bücher,
          Zeitschriften, Musikalben und Produktpackungen. Es ist oft das erste,
          was Menschen sehen, wenn sie ein Produkt betrachten, und kann
          maßgeblich dazu beitragen, ob sie sich näher damit beschäftigen.
        </p>

        <v-img
          src="@/assets/design/04_design.webp"
          alt="Corporate Design"
          class="my-5"
        />
        <h3 class="my-3">Was macht ein gutes Coverdesign aus?</h3>
        <p>
          Ein gutes Coverdesign ist die Balance zwischen visueller
          Attraktivität, Klarheit und der Fähigkeit, eine emotionale Verbindung
          herzustellen, finden. Es ist ein entscheidender Faktor für den Erfolg
          eines Produkts, da es die Aufmerksamkeit auf sich zieht und den ersten
          Eindruck bei den potenziellen Käufern hinterlässt.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCatalog",
});
</script>
