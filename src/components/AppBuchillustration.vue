<template>
  <v-container>
    <v-card class="mt-5 py-5">
      <v-card-title><h2>Buchillustration</h2></v-card-title>
      <v-card-text class="my-5">
        <p>
          Buchillustrationen sind eine wichtige Ergänzung zu Texten und können
          dazu beitragen, die Geschichte oder das Thema eines Buches zu
          veranschaulichen. Eine gute Buchillustration sollte folgende
          Eigenschaften aufweisen:
        </p>
        <v-list>
          <v-list-item>
            <b>Passend zum Text:</b> Die Illustration sollte das Thema des
            Buches oder des Kapitels widerspiegeln und den Text ergänzen.
          </v-list-item>
          <v-list-item>
            <b>Kreativität:</b> Eine gute Illustration sollte kreativ und
            einzigartig sein, um das Interesse des Lesers zu wecken.
          </v-list-item>
          <v-list-item>
            <b>Qualität:</b> Die Qualität der Illustration sollte hoch sein, um
            die Leser zu beeindrucken und das Buch attraktiver zu machen.
          </v-list-item>
        </v-list>
        <v-img
          src="@/assets/ill/09_illustration.webp"
          alt="Buchillustration"
          class="my-5"
        />
        <v-list>
          <v-card-title
            ><h4>Wofür kann man Buchillustrationen verwenden?</h4>
          </v-card-title>
          <v-list-item>
            <b>Erläuterung des Textes:</b>
            Illustrationen können dazu dienen, den Text zu veranschaulichen und
            zu erklären. Sie können beispielsweise Charaktere, Orte oder
            Ereignisse darstellen, die im Text nur vage beschrieben werden.
          </v-list-item>
          <v-list-item>
            <b>Stimmungsbildung:</b>
            Illustrationen können dazu beitragen, eine bestimmte Stimmung oder
            Atmosphäre in einem Buch zu erzeugen. Sie können beispielsweise eine
            bedrohliche, humorvolle oder melancholische Stimmung vermitteln.
          </v-list-item>
          <v-list-item>
            <b>Interpretation des Textes:</b> Illustrationen können dazu
            verwendet werden, den Text auf eine neue Weise zu interpretieren
            oder zu verstehen. Sie können beispielsweise eine symbolische oder
            metaphorische Bedeutung haben.
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBuchillustration",
});
</script>
