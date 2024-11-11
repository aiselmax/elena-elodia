<template>
  <v-row no-gutters class="socialRow my-10">
    <v-col
      v-for="(button, index) in socialmediaItems"
      :key="index"
      cols="12"
      md="6"
      lg="4"
    >
      <v-btn size="x-large" variant="plain" :href="button.link" target="_blank">
        <Transition name="bounce" :css="!isMobile">
          <div
            v-show="isIntersecting || isMobile"
            class="mb-15 pa-5"
            :class="{ socialBtn: false }"
          >
            <v-icon start :icon="button.icon"></v-icon>
            {{ button.label }}
          </div>
        </Transition>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { SocialmediaItem } from "@/types/SocialmediaItem";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isIntersecting: Boolean,
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
  },
  data() {
    return {
      socialmediaItems: [
        {
          label: "WhatsApp",
          link: "https://wa.me/4917662307783",
          icon: "mdi-whatsapp",
        },
        {
          label: "Email",
          link: "mailto:elena.ischtschenko@gmail.com",
          icon: "mdi-email",
        },
        {
          label: "Facebook",
          link: "https://www.facebook.com/ElenaElodiaArt/",
          icon: "mdi-facebook",
        },
        {
          label: "Telegram",
          link: "https://t.me/elena_elodia",
          icon: "mdi-telegram",
        },
        {
          label: "0176 - 623 077 83",
          link: "tel:+4917662307783",
          icon: "mdi-phone",
        },
        {
          label: "Instagram",
          link: "https://www.instagram.com/elena_elodia_art/",
          icon: "mdi-instagram",
        },
      ] as SocialmediaItem[],
    };
  },
});
</script>

<style scoped>
.socialRow {
  min-height: 250px;
}
.socialBtn {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  border: 1px dashed;
  min-height: 250px;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
