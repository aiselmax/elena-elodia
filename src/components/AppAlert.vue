<template>
  <div>
    <transition name="slide-fade">
      <v-alert
        v-show="alertText.length > 0"
        :color="color"
        :icon="icon"
        elevation="3"
        :text="alertText"
      ></v-alert>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
    errMessage: String,
  },
  data() {
    return {
      color: "",
      icon: "",
      alertText: "",
    };
  },
  watch: {
    type: {
      immediate: true,
      /**
       * @param newVal = new status of alert
       */
      handler(newVal: string) {
        switch (newVal) {
          case "success":
            this.color = "success";
            this.icon = "$success";
            this.alertText = "Fertig, E-Mail wurde gesendet!";
            break;
          case "error":
            this.color = "error";
            this.icon = "$error";
            this.alertText = `Unerwarteter Fehler: ${this.errMessage}`;
            break;
          case "info":
            this.color = "info";
            this.icon = "$info";
            this.alertText = "E-Mail wird gerade gesendet...";
            break;
          default:
            break;
        }
      },
    },
  },
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
