<template>
  <v-container>
    <v-card class="mt-5 py-5">
      <v-card-title><h2>Design von Bannern</h2></v-card-title>
      <v-card-text class="my-5">
        <p>
          Banner sind eine effektive Möglichkeit, um Aufmerksamkeit zu erregen
          und Menschen auf eine Website oder eine andere Landingpage zu leiten.
          Egal, ob sie digital oder für Printmedien sind, ein gutes Bannerdesign
          sollte folgende Elemente enthalten:
        </p>

        <v-list>
          <v-card-title> Eine klare Botschaft </v-card-title>
          <v-list-item>
            Das Wichtigste an einem Banner ist, dass es eine klare Botschaft
            vermittelt. Was wollen Sie mit dem Banner erreichen? Wollen Sie ein
            Produkt verkaufen, eine Dienstleistung bewerben oder einfach nur
            Aufmerksamkeit erregen? Die Botschaft sollte kurz und prägnant sein,
            damit sie schnell erfasst werden kann.
          </v-list-item>
          <v-card-title> Fesselnde Bilder oder Grafiken </v-card-title>
          <v-list-item>
            Bilder und Grafiken sind ein wichtiger Teil eines Banners, da sie
            Aufmerksamkeit erregen und die Botschaft unterstreichen können.
            Verwenden Sie Bilder oder Grafiken, die ansprechend sind und die
            Aufmerksamkeit des Betrachters auf sich ziehen.
          </v-list-item>
          <v-card-title> Eine starke Handlungsaufforderung </v-card-title>
          <v-list-item>
            Was möchten Sie, dass der Betrachter tut, nachdem er Ihr Banner
            gesehen hat? Sollen sie auf eine Website gehen, einen Newsletter
            abonnieren oder ein Produkt kaufen? Eine starke
            Handlungsaufforderung (Call-to-Action) kann den Betrachter dazu
            motivieren, die gewünschte Handlung auszuführen.
          </v-list-item>
          <v-card-title> Eine einheitliche Gestaltung </v-card-title>
          <v-list-item>
            Banner sollten Teil eines einheitlichen Designkonzepts sein.
            Verwenden Sie die gleichen Farben, Schriftarten und Grafiken, wie
            sie auch auf Ihrer Website oder in Ihren anderen
            Marketingmaterialien verwendet werden. Dies hilft, Ihr Unternehmen
            oder Ihre Marke in Erinnerung zu rufen.
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBanner",
});
</script>
