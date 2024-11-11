<template>
  <v-container>
    <v-card class="mt-5 py-5">
      <v-card-title><h2>Digitale Illustrationen</h2></v-card-title>
      <v-card-text class="my-5">
        <p>
          Eine gute digitale Illustration ist eine, die sowohl ästhetisch
          ansprechend als auch wirkungsvoll ist. Sie sollte die Aufmerksamkeit
          des Betrachters auf sich ziehen und eine Botschaft vermitteln. Eine
          gute digitale Illustration ist auch technisch gut ausgeführt. Die
          Linien sollten sauber sein, die Farben sollten harmonisch aufeinander
          abgestimmt sein und die Perspektive sollte korrekt sein.
        </p>
        <v-list>
          <v-list-item>
            <v-icon icon="mdi-check-outline" size="x-small"></v-icon>
            <b>Kreativität:</b>
            Eine gute digitale Illustration sollte kreativ und einzigartig sein.
            Der Künstler sollte seine eigene Persönlichkeit und seinen eigenen
            Stil in das Werk einbringen.
          </v-list-item>
          <v-list-item>
            <v-icon icon="mdi-check-outline" size="x-small"></v-icon>
            <b>Technische Fähigkeiten:</b>
            Der Künstler sollte über gute technische Fähigkeiten verfügen, um
            die Illustration auf professionellem Niveau zu erstellen. Dazu
            gehören Kenntnisse in der Farbtheorie, Komposition und Perspektive.
          </v-list-item>
          <v-list-item>
            <v-icon icon="mdi-check-outline" size="x-small"></v-icon>
            <b>Ästhetik:</b>
            Eine gute digitale Illustration sollte ästhetisch ansprechend sein
            und den Betrachter faszinieren.
          </v-list-item>
        </v-list>
        <v-img
          src="@/assets/ill/04_illustration.webp"
          alt="Digitale Illustratio"
          class="my-5"
        />
        <v-list>
          <v-card-title>
            <h4>Wofür kann man digitale Illustrationen verwenden?</h4>
          </v-card-title>
          <v-list-item>
            <b>Kommunikation:</b>
            Digitale Illustrationen können verwendet werden, um Informationen zu
            vermitteln oder Geschichten zu erzählen. Sie können in Katalogen,
            Broschüren, Zeitschriften, Zeitungen und Websites verwendet werden.
          </v-list-item>
          <v-list-item>
            <b>Design:</b>
            Digitale Illustrationen können verwendet werden, um Logos,
            Verpackungen und andere Designs zu erstellen.
          </v-list-item>
          <v-list-item>
            <b>Marketing:</b>
            Digitale Illustrationen können verwendet werden, um Produkte oder
            Dienstleistungen zu bewerben. Sie werden häufig in Anzeigen, auf
            Websites und in sozialen Medien verwendet.
          </v-list-item>
          <v-list-item>
            <b>Animation:</b>
            Digitale Illustrationen können als Grundlage für Animationen dienen,
            um Filme, Fernsehsendungen oder Videospiele zu erstellen.
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppDigitaleIllustration",
});
</script>
