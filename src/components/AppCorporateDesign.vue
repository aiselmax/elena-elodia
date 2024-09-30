<template>
  <v-container>
    <v-card class="my-5">
      <v-row no-gutters>
        <v-col cols="6" class="py-5">
          <v-card-title><h1>Corporate Design</h1></v-card-title>
          <v-card-text class="my-5">
            <p>
              Corporate Design (CD) ist der visuelle Auftritt eines
              Unternehmens. Es umfasst alle visuellen Elemente, die ein
              Unternehmen nach außen kommuniziert, wie z. B. Logo, Typografie,
              Farbwelt, Bildsprache und Layout. Das Ziel eines Corporate Designs
              ist es, ein einheitliches und unverwechselbares Erscheinungsbild
              zu schaffen, das die Identität und Werte des Unternehmens
              widerspiegelt.
            </p>
          </v-card-text>
        </v-col>
        <v-col cols="6">
          <v-img src="@/assets/design/03_design.webp" alt="Corporate Design" />
        </v-col>
        <v-col cols="12">
          <v-card-title>
            <h3>Nutzen des Corporate Designs</h3>
          </v-card-title>
          <v-card-text>
            Ein Corporate Design bietet Unternehmen eine Reihe von Vorteilen:
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-check</v-icon>
                  <b>Wiedererkennungswert</b>
                </v-list-item-title>

                Ein einheitliches Erscheinungsbild sorgt für einen hohen
                Wiedererkennungswert. Kunden und Partner können das Unternehmen
                anhand seines Corporate Designs leicht identifizieren.
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-check</v-icon>
                  <b>Professionalität</b>
                </v-list-item-title>

                Ein gut durchdachtes Corporate Design vermittelt ein
                professionelles Image. Es zeigt, dass das Unternehmen sich
                Gedanken über seine visuelle Kommunikation macht.
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-icon>mdi-check</v-icon>
                  <b>Vertrauenswürdigkeit</b>
                </v-list-item-title>

                Ein einheitliches Erscheinungsbild schafft Vertrauen. Kunden und
                Partner fühlen sich bei einem Unternehmen wohl, das ein klares
                und ansprechendes Corporate Design hat.
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-col></v-row
      >
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCorporateDesign",
});
</script>
