<template>
  <app-header></app-header>
  <app-start :currentSection="currentSection" id="home" />
  <app-scroll-fab :currentSection="currentSection"></app-scroll-fab>
  <app-about :currentSection="currentSection" id="about" />
  <app-service :currentSection="currentSection" id="service" />
  <app-portfolio :currentSection="currentSection" id="portfolio" />
  <app-contact :currentSection="currentSection" id="contact" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AppHeader from "../components/AppHeader.vue";
import AppStart from "../components/AppStart.vue";
import AppAbout from "../components/AppAbout.vue";
import AppService from "../components/AppService.vue";
import AppPortfolio from "../components/AppPortfolio.vue";
import AppContact from "../components/AppContact.vue";
import AppScrollFab from "../components/AppScrollFab.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppHeader,
    AppStart,
    AppAbout,
    AppService,
    AppPortfolio,
    AppContact,
    AppScrollFab,
  },
  data() {
    return {
      observer: null as IntersectionObserver | null,
      currentSection: "",
    };
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.$el,
      threshold: 0.5,
    });
  },
  mounted() {
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section: Element) => {
      if (this.observer) {
        this.observer.observe(section);
      }
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach(({ target, isIntersecting }) => {
        const id = target.getAttribute("id");
        const navLink = document.querySelector(
          `.menuitem[data-text="${id}"]`
        ) as HTMLElement | null;
        if (isIntersecting) {
          this.currentSection = id || "";
          if (navLink) navLink.classList.add("active");
        } else {
          if (navLink) navLink.classList.remove("active");
        }
      });
    },
  },
});
</script>
