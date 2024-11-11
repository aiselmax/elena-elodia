<template>
  <v-container>
    <v-card class="my-5">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="py-5">
          <v-card-title><h2>Portrait-Illustration</h2></v-card-title>
          <v-card-text class="my-5">
            <p>
              Portraitillustrationen sind eine künstlerische Darstellung von
              Personen, die oft für verschiedene Zwecke verwendet werden. Ein
              gutes Portrait sollte die Persönlichkeit und Charakterzüge der
              dargestellten Person widerspiegeln. Es sollte auch eine gewisse
              Ähnlichkeit mit der Person haben, um sie erkennbar zu machen. Eine
              gute Portraitillustration sollte auch eine gewisse künstlerische
              Qualität haben, die das Interesse des Betrachters weckt.
            </p>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="@/assets/ill/08_illustration.webp"
            alt="Portrait-Illustration"
          />
        </v-col>
        <v-col ccols="12" md="6">
          <v-card-title>
            <h4>Wofür kann man Portrait-Illustration verwenden?</h4>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <b>Als Kunstwerk:.</b>
                </v-list-item-title>
                Portrait-Illustrationen können als eigenständige Kunstwerke
                betrachtet und geschätzt werden.
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <b> Als Illustration: </b>
                </v-list-item-title>
                Portrait-Illustrationen können in Büchern, Zeitschriften,
                Postkarten Werbung und anderen Medien verwendet werden, um
                Menschen darzustellen.
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <b>Als Geschenk:</b>
                </v-list-item-title>
                Portrait-Illustrationen sind eine beliebte Wahl für persönliche
                Geschenke für Freunde und Familie. Sie können auf eine Vielzahl
                von Gegenständen gedruckt werden, darunter Plakate, T-Shirts,
                Tassen und vieles mehr
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-title>
            <h4>Was macht eine gute Portrait-Illustration aus?</h4>
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <v-icon icon="mdi-check-outline" size="x-small"></v-icon>
                  <b>Sie ist ansprechend und fällt ins Auge.</b>
                </v-list-item-title>
                Das Portrait sollte den Betrachter dazu einladen, es genauer zu
                betrachten. Dazu können kräftige Farben, interessante Details
                oder ein ansprechendes Layout beitragen.
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon icon="mdi-check-outline" size="x-small"></v-icon>
                  <b>
                    Sie ist authentisch und fängt die Persönlichkeit des
                    Porträtierten ein.
                  </b>
                </v-list-item-title>
                Das Portrait sollte dem Betrachter ein Gefühl für die Person
                geben, die dargestellt wird. Dazu ist es wichtig, die Merkmale
                des Gesichts und der Körpersprache genau zu beobachten und zu
                übertragen.
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon icon="mdi-check-outline" size="x-small"></v-icon>
                  <b>Sie ist technisch gut ausgeführt.</b>
                </v-list-item-title>
                Das Portrait sollte sorgfältig ausgearbeitet sein.
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
  name: "AppPortrait",
});
</script>
