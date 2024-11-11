<template>
  <v-footer border>
    <v-container class="text-right">
      <v-btn @click="dialog = true" variant="plain"> Impressum </v-btn>
      <v-dialog v-model="dialog" transition="dialog-bottom-transition">
        <v-container>
          <v-card>
            <v-card-title><h2>Impressum</h2></v-card-title>
            <v-card-text>
              <div class="my-3">
                <h3 class="my-3">Angaben zur Person:</h3>
                <p>Elena Ischtschenko</p>
                <p>Mosczinskystrasse 14</p>
                <p>01069 Dresden</p>
              </div>

              <div class="my-3">
                <h3 class="my-3">Kontakt:</h3>
                <p>Telefon: 0176-62307783</p>
                <p>E-Mail: elena.ischtschenko [at] gmail.com</p>
              </div>
              <div class="my-5">
                <h3>Haftungsausschluss:</h3>
                <div class="my-3">
                  <h4 class="my-3">Haftung für Inhalte</h4>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                    erstellt. Für die Richtigkeit, Vollständigkeit und
                    Aktualität der Inhalte können wir jedoch keine Gewähr
                    übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                    für eigene Inhalte auf diesen Seiten nach den allgemeinen
                    Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                    Nutzung von Informationen nach den allgemeinen Gesetzen
                    bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                    jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von
                    entsprechenden Rechtsverletzungen werden wir diese Inhalte
                    umgehend entfernen.
                  </p>

                  <h4 class="my-3">Haftung für Links</h4>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
                    auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                    waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
                    permanente inhaltliche Kontrolle der verlinkten Seiten ist
                    jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                    nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                    werden wir derartige Links umgehend entfernen.
                  </p>

                  <h4 class="my-3">Datenschutz</h4>
                  <p>
                    Sofern innerhalb des Internetangebotes die Möglichkeit zur
                    Eingabe persönlicher oder geschäftlicher Daten
                    (Emailadressen, Namen, Anschriften) besteht, so erfolgt die
                    Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich
                    freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller
                    angebotenen Dienste ist – soweit technisch möglich und
                    zumutbar – auch ohne Angabe solcher Daten bzw. unter Angabe
                    anonymisierter Daten oder eines Pseudonyms gestattet. Die
                    Nutzung der im Rahmen des Impressums oder vergleichbarer
                    Angaben veröffentlichten Kontaktdaten wie Postanschriften,
                    Telefon- und Faxnummern sowie Emailadressen durch Dritte zur
                    Übersendung von nicht ausdrücklich angeforderten
                    Informationen ist nicht gestattet. Rechtliche Schritte gegen
                    die Versender von sogenannten Spam-Mails bei Verstössen
                    gegen dieses Verbot sind ausdrücklich vorbehalten.
                  </p>

                  <h4 class="my-3">Urheberrecht</h4>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
                    für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                    erstellt wurden, werden die Urheberrechte Dritter beachtet.
                    Insbesondere werden Inhalte Dritter als solche
                    gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                    entfernen.
                  </p>

                  <h4 class="my-3">
                    Rechtswirksamkeit dieses Haftungsausschlusses
                  </h4>
                  <p>
                    Sofern Teile oder einzelne Formulierungen dieses Textes der
                    geltenden Rechtslage nicht, nicht mehr oder nicht
                    vollständig entsprechen sollten, bleiben die übrigen Teile
                    des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon
                    unberührt.
                  </p>
                </div>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end pb-4">
              <v-btn
                elevation="2"
                @click="dialog = false"
                color="surface-variant"
              >
                Schließen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-dialog>

      <span> &copy; {{ year }} {{ siteTitle }} </span>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppFooter",
  computed: {
    siteTitle() {
      return "Elena Elodia";
    },
    year() {
      return new Date().getFullYear();
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
});
</script>
