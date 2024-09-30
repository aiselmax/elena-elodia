<template>
  <v-container>
    <v-card>
      <v-card-title class="my-5"><h1>Firmenlogo</h1></v-card-title>
      <v-card-text>
        <p>
          Ein Firmenlogo ist ein wichtiger Bestandteil der Corporate Identity
          eines Unternehmens. Es ist das visuelle Aushängeschild und soll die
          Werte und Ziele des Unternehmens repräsentieren. Ein gutes Firmenlogo
          zeichnet sich durch folgende Merkmale aus:
        </p>
        <v-list>
          <v-list-item>
            <v-icon>mdi-check</v-icon>

            Eindeutigkeit: Das Logo sollte einzigartig sein und sich von anderen
            Logos unterscheiden, um eine klare Wiedererkennung zu gewährleisten.
          </v-list-item>
          <v-list-item>
            <v-icon>mdi-check</v-icon>

            Einfachheit: Ein gutes Logo sollte einfach und leicht verständlich
            sein, um schnell im Gedächtnis zu bleiben.
          </v-list-item>
          <v-list-item>
            <v-icon>mdi-check</v-icon>

            Wiedererkennbarkeit: Das Logo sollte auch in kleiner Größe und in
            Schwarz-Weiß gut erkennbar sein.
          </v-list-item>
          <v-list-item>
            <v-icon>mdi-check</v-icon>

            Zeitlosigkeit: Ein gutes Logo sollte auch nach Jahren noch aktuell
            und modern wirken.
          </v-list-item>
          <v-list-item>
            <v-icon>mdi-check</v-icon>

            Passend zum Unternehmen: Das Logo sollte die Werte und Ziele des
            Unternehmens widerspiegeln und zur Zielgruppe passen.
          </v-list-item>
        </v-list>
        <p>
          Ein gutes Firmenlogo kann dazu beitragen, das Unternehmen bekannter zu
          machen und das Image zu stärken. Es ist daher wichtig, bei der
          Gestaltung des Logos sorgfältig vorzugehen und sich Zeit zu nehmen, um
          ein Logo zu entwickeln, das den Anforderungen entspricht.
        </p>
      </v-card-text>
      <v-img src="@/assets/design/07_design.webp" alt="Firmenlogo" />
    </v-card>

    <v-card class="my-3">
      <v-card-title><h2>Schriftart</h2> </v-card-title>
      <v-card-text>
        <p class="py-3">
          Die Schriftart ist ein wichtiger Bestandteil bei der Gestaltung eines
          Firmenlogos. Eine passende Schriftart kann dazu beitragen, dass das
          Logo einprägsam und leicht verständlich ist. Eine unpassende
          Schriftart kann hingegen dazu führen, dass das Logo schwer lesbar ist
          und somit seine Wirkung verfehlt.
        </p>
        <p class="py-3">
          Laut einer Studie ist die Lesbarkeit von Schriften in Displays ein
          wichtiger Faktor bei der Gestaltung von Logos. Eine gut lesbare
          Schriftart kann dazu beitragen, dass das Logo auch in kleiner Größe
          und auf verschiedenen Geräten gut erkennbar ist.
        </p>
        <p class="py-3">
          Auch in der Produktgestaltung und -markierung sowie in der
          Titelkopf-Gestaltung von Printmedien spielt die Schriftart eine
          wichtige Rolle bei der Wiedererkennung und der Vermittlung von
          Informationen.
        </p>
        <p class="py-3">
          Insgesamt ist die Schriftart ein wichtiger Faktor bei der Gestaltung
          eines Firmenlogos und sollte sorgfältig ausgewählt werden, um eine
          optimale Wirkung zu erzielen.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFirmenlogo",
});
</script>
