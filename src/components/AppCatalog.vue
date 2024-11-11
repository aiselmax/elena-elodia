<template>
  <v-container>
    <v-card class="mt-5 py-5">
      <v-card-title><h2>Gestallung von Katalogen</h2></v-card-title>
      <v-card-text class="my-5">
        <p>
          Kataloge sind eine wichtige Marketing- und Vertriebsmaßnahme für
          Unternehmen. Sie dienen dazu, Produkte und Dienstleistungen zu
          präsentieren und potenzielle Kunden zu informieren. Ein gutes Design
          ist daher unerlässlich, um die gewünschte Wirkung zu erzielen.
        </p>

        <v-img
          src="@/assets/design/02_design.webp"
          alt="Corporate Design"
          class="my-5"
        />
        <v-card-title>
          <h3>Elemente eines guten Katalogdesigns</h3>
        </v-card-title>
        <v-list>
          <v-list-item>
            <b>Visuelle Gestaltung:</b> Die visuelle Gestaltung des Katalogs
            sollte ansprechend und ästhetisch sein. Sie sollte die Produkte oder
            Dienstleistungen ins beste Licht rücken.
          </v-list-item>
          <v-list-item>
            <b>Layout:</b> Das Layout des Katalogs sollte übersichtlich und gut
            strukturiert sein. Es sollte dem Leser die Orientierung erleichtern.
          </v-list-item>
          <v-list-item>
            <b>Bilder:</b> Bilder spielen in Katalogen eine wichtige Rolle. Sie
            sollten die Produkte oder Dienstleistungen ansprechend und
            informativ präsentieren.
          </v-list-item>
        </v-list>
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
