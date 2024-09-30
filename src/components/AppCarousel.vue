<template>
  <v-container :id="title">
    <v-card class="my-5">
      <v-card-title>
        <div class="text-h4 text-center mt-5">
          {{ title }}
        </div>
      </v-card-title>
      <v-card-text>
        <p class="my-5">{{ text }}</p>
        <Transition name="slide-fade">
          <v-carousel
            v-show="isIntersecting"
            hide-delimiter-background
            show-arrows="hover"
          >
            <v-carousel-item
              v-for="(item, index) in carouselItems"
              :key="index"
            >
              <v-img
                :src="imagePath(item.src)"
                :alt="item.title"
                class="carouselImg my-15 my-sm-0"
              />
              <div class="text-overline text-center">
                {{ item.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </Transition>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CarouselItem } from "@/types/CarouselItem";

export default defineComponent({
  name: "AppCarousel",
  props: {
    carouselItems: {
      type: Array as () => CarouselItem[],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isIntersecting: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    /**
     * This function takes a string argument 'src' and returns the path to the corresponding image asset in the assets folder. It uses the 'require' function to dynamically load the image file.
     */
    imagePath(src: string): string {
      return require(`@/assets/${src}`);
    },
  },
});
</script>

<style scoped>
/* For mobile phones: */
.carouselImg {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .carouselImg {
    height: 85%;
  }
}

.slide-fade-enter-active {
  transition: all 1s ease-out;
}
.slide-fade-enter-from {
  transform: translateY(50px);
}
</style>
