<template>
  <v-container>
    <v-card class="mt-5 py-5">
      <v-card-title><h2>Design von Flyern</h2></v-card-title>
      <v-card-text class="my-5">
        <p>
          Flyer sind ein wichtiges Marketinginstrument, um Informationen über
          ein Produkt, eine Dienstleistung oder ein Event zu verbreiten. Ein
          gutes Design von Flyer ist entscheidend, um die Aufmerksamkeit der
          Zielgruppe zu gewinnen und die gewünschte Botschaft zu vermitteln
        </p>

        <v-img
          src="@/assets/design/01_design.webp"
          alt="Corporate Design"
          class="my-5"
        />
        <v-card-title>
          <h3>Was macht ein gutes Design von Flyer aus?</h3>
        </v-card-title>
        <v-list>
          <v-list-item>
            <b>Aufmerksamkeitserregung:</b> Der Flyer sollte ins Auge fallen und
            die Aufmerksamkeit des Betrachters erregen. Dies kann durch einen
            starken visuellen Auftritt, eine ansprechende Gestaltung oder einen
            ungewöhnlichen Format erreicht werden.
          </v-list-item>
          <v-list-item>
            <b>Klarheit und Übersichtlichkeit:</b> Das Design von Visitenkarten
            sollte konsistent mit dem Corporate Design des Unternehmens sein. Es
            sollte die gleichen Farben, Schriftarten und visuellen Elemente wie
            das Corporate Design verwenden, um eine einheitliche Markenidentität
            zu schaffen.
          </v-list-item>
          <v-list-item>
            <b>Lesbarkeit:</b> Der Flyer sollte leicht verständlich und
            übersichtlich sein. Der Betrachter sollte auf einen Blick erkennen,
            was der Flyer bewirbt oder informiert.
          </v-list-item>
          <v-list-item>
            <b>Überzeugungskraft:</b> Der Flyer sollte die Zielgruppe
            überzeugen, die gewünschte Handlung zu ergreifen. Dies kann durch
            eine starke Botschaft, ein ansprechendes Angebot oder einen
            emotionalen Appell erreicht werden. werden.
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFlyer",
});
</script>
