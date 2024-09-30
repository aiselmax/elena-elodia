<template>
  <v-container>
    <v-card class="my-5">
      <v-row no-gutters>
        <v-col cols="12">
          <v-card-title class="my-5">
            <h1>Erschaffen eines Bildes nach Ihren Wünschen</h1>
          </v-card-title>
          <v-card-text>
            <p class="my-5">
              Ich bin Elena, eine Künstlerin die Kunstwerke nach Kundenwunsch
              erstellt. Ich liebe es, mit Farben, Formen und Texturen zu
              arbeiten, um einzigartige und ansprechende Kunstwerke zu schaffen.
            </p>
            <p class="my-5">
              Ich bin nicht auf einen bestimmten Stil oder eine bestimmte
              Technik spezialisiert. Ich bin offen für alle Arten von Aufträgen
              und ich freue mich, mit Ihnen zusammenzuarbeiten, um ein Kunstwerk
              zu kreieren, das Ihren individuellen Geschmack widerspiegelt.
            </p>
            <v-list>
              <v-list-item>
                <v-icon>mdi-check</v-icon>
                Ich bin eine erfahrenere Künstlerin mit einem Gespür für
                Ästhetik. Ich habe jahrelange Erfahrung in der Erstellung von
                Kunstwerken und ich weiß, wie man ein Kunstwerk schafft, das
                sowohl schön als auch ansprechend ist.
              </v-list-item>
              <v-list-item>
                <v-icon>mdi-check</v-icon>
                Ich arbeite mit Ihnen zusammen, um Ihre Vision zu verwirklichen.
                Ich möchte, dass Sie mit Ihrem Kunstwerk rundum zufrieden sind.
                Deshalb arbeite ich mit Ihnen zusammen, um ein Kunstwerk zu
                kreieren, das Ihren Vorstellungen entspricht.
              </v-list-item>
              <v-list-item>
                <v-icon>mdi-check</v-icon>
                Ich bin flexibel und anpassungsfähig. Egal, ob Sie ein
                traditionelles Gemälde, ein abstraktes Kunstwerk oder etwas ganz
                anderes suchen, ich kann Ihnen helfen.
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppArtBuy",
});
</script>
