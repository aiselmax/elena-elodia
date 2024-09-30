vue
<template>
  <section :id="id">
    <v-container>
      <v-card class="my-15">
        <v-card-text>
          <v-row align="center">
            <v-col cols="12" md="6">
              <Transition name="fade">
                <v-list>
                  <v-list-item>
                    <p class="text-h4">ELENA ISCHTSCHENKO</p>
                    <p class="text-overline">
                      Grafikdesigner - Illustrator - Künstlerin
                    </p>
                  </v-list-item>
                </v-list>
              </Transition>
              <Transition
                v-for="(item, index) in aboutItems"
                :key="index"
                :name="item.transitionClass"
              >
                <AppAboutItem
                  v-show="isIntersecting"
                  :aboutItem="item"
                ></AppAboutItem>
              </Transition>
            </v-col>
            <v-col cols="12" md="6">
              <Transition name="slide-fade">
                <v-img
                  src="@/assets/foto.webp"
                  alt="Profilbild"
                  class="profilbild"
                  v-show="isIntersecting"
                ></v-img>
              </Transition>
            </v-col>
          </v-row>
          <Transition name="fade5">
            <div class="text-body-1 my-5" v-show="isIntersecting">
              <p class="my-3">
                Hallo, ich bin Elena, ein erfahrener Grafikdesigner, Künstler
                und Illustrator mit Leidenschaft für kreatives Design.
              </p>
              <p class="my-3">
                Seit 2018 habe ich mich auf die Gestaltung von Corporate Design,
                Firmenlogos, Visitenkarten, Flyern, Broschüren, Plakaten,
                Katalogen und Coverdesigns spezialisiert.
              </p>
              <p class="my-3">
                Meine Expertise erstreckt sich auch auf die Welt der
                Illustrationen, einschließlich Portraitillustrationen,
                Buchillustrationen und anderen digitalen Kunstwerken.
              </p>
              <p class="my-3">
                Alle meine Bilder sind käuflich erwerbbar und können ausgestellt
                werden. Darüber hinaus biete ich Ihnen die Möglichkeit,
                maßgeschneiderte Designs nach Ihren individuellen Vorstellungen
                zu erstellen.
              </p>
              <p class="my-3">
                Lassen Sie uns gemeinsam kreative Ideen zum Leben erwecken und
                Ihre visuellen Projekte zum Erfolg führen. Kontaktieren Sie mich
                gerne, um mehr über meine Arbeiten und Möglichkeiten der
                Zusammenarbeit zu erfahren.
              </p>
            </div>
          </Transition>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppAboutItem from "@/components/AppAboutItem.vue";
import { AboutItem } from "@/types/AboutItem";

export default defineComponent({
  name: "AppAbout",
  components: {
    AppAboutItem,
  },
  props: {
    currentSection: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  watch: {
    currentSection: function (newSectionId) {
      if (newSectionId === this.id) {
        this.isIntersecting = true;
      }
    },
  },
  data() {
    return {
      isIntersecting: false,
      aboutItems: [
        {
          type: "Weiterbildung",
          transitionClass: "fade2",
          title: "3D und Motion - Design",
          subtitle: "alfatraining",
          date: "2023",
        },
        {
          type: "Weiterbildung",
          transitionClass: "fade2",
          title: "Grafik und Design",
          subtitle: "IBB Dresden",
          date: "2018",
        },
        {
          type: "Studium",
          transitionClass: "fade3",
          title: "Bachelor of Arts",
          subtitle: "HTW Dresden / Fakultät Gestaltung",
          date: "2014 - 2017",
        },
        {
          type: "Fachabitur",
          transitionClass: "fade4",
          title: "Gestaltung",
          subtitle: "BSZ für Dienstleistungen und Gestaltung Dresden",
          date: "2011 - 2013",
        },
      ] as AboutItem[],
    };
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 2s ease;
}
.fade3-enter-active,
.fade3-leave-active {
  transition: opacity 3s ease;
}
.fade4-enter-active,
.fade4-leave-active {
  transition: opacity 4s ease;
}
.fade5-enter-active,
.fade5-leave-active {
  transition: opacity 5s ease;
}
.fade-enter-from,
.fade2-enter-from,
.fade3-enter-from,
.fade4-enter-from,
.fade5-enter-from,
.fade-leave-to,
.fade2-leave-to,
.fade3-leave-to,
.fade4-leave-to,
.fade5-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 3s ease-out;
}
.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.profilbild {
  overflow: hidden;
  height: 100%;
}
</style>
