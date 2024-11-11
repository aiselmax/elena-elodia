<template>
  <v-container>
    <v-card class="mt-5 py-5">
      <v-card-title><h2>Gestallung von Visitenkarten</h2></v-card-title>
      <v-card-text class="my-5">
        <p>
          Visitenkarten sind ein wichtiger Bestandteil des Geschäftslebens. Sie
          dienen dazu, Kontaktinformationen zu übermitteln und einen ersten
          Eindruck zu hinterlassen. Ein gutes Design von Visitenkarten kann
          dabei helfen, sich von der Konkurrenz abzuheben und einen bleibenden
          Eindruck zu hinterlassen.
        </p>

        <v-img
          src="@/assets/design/03_design.webp"
          alt="Corporate Design"
          class="my-5"
        />
        <v-card-title>
          <h3>Was macht ein gutes Design von Visitenkarten aus?</h3>
        </v-card-title>
        <v-list>
          <v-list-item>
            <b>Einfachheit:</b> Ein gutes Design von Visitenkarten sollte
            einfach und übersichtlich sein. Es sollte nicht zu viele
            Informationen enthalten und die wichtigsten Informationen wie Name,
            Titel, Kontaktdaten und Logo des Unternehmens enthalten.
          </v-list-item>
          <v-list-item>
            <b>Konsistenz:</b> Das Design von Visitenkarten sollte konsistent
            mit dem Corporate Design des Unternehmens sein. Es sollte die
            gleichen Farben, Schriftarten und visuellen Elemente wie das
            Corporate Design verwenden, um eine einheitliche Markenidentität zu
            schaffen.
          </v-list-item>
          <v-list-item>
            <b>Lesbarkeit:</b> Ein erfolgreiches Design von Visitenkarten sollte
            leicht lesbar sein. Die Schriftgröße und -art sollten gut gewählt
            sein, um eine klare Lesbarkeit zu gewährleisten.
          </v-list-item>
          <v-list-item>
            <b>Einzigartigkeit:</b> Ein erfolgreiches Design von Visitenkarten
            sollte einzigartig sein und das Unternehmen oder die Person von
            anderen unterscheiden. Es kann durch die Verwendung von
            ungewöhnlichen Formen, Materialien oder visuellen Elementen erreicht
            werden.
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppVisitcard",
});
</script>
