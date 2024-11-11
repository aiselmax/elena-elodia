<template>
  <form @submit.prevent="submit">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="name.value.value"
          :counter="20"
          :error-messages="name.errorMessage.value"
          label="Name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-select
          v-model="betreff.value.value"
          :items="items"
          :error-messages="betreff.errorMessage.value"
          label="Betreff"
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <Transition name="slide-fade">
          <v-select
            v-if="betreff.value.value === 'Art'"
            v-model="bild.value.value"
            :items="itemsArt"
            :error-messages="bild.errorMessage.value"
            label="Bild"
            multiple
            chips
          ></v-select>
        </Transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="text.value.value"
          :error-messages="text.errorMessage.value"
          variant="filled"
          label="Nachricht"
          auto-grow
        ></v-textarea>
      </v-col>
    </v-row>
    <v-btn class="me-4" type="submit"> Senden </v-btn>
    <v-btn variant="plain" @click="handleReset"> löschen </v-btn>
    <div class="my-5">
      <App-Alert :type="alertType.value" :message="setError"></App-Alert>
    </div>
  </form>
</template>
<script setup>
import { ref, defineProps } from "vue";
import { useField, useForm } from "vee-validate";
import AppAlert from "./AppAlert.vue";
import { sendEmail } from "@/utilities/formSubmitEmailJS";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 3) return true;
      return "Der Name muss mindestens 3 Zeichen lang sein.";
    },
    email(value) {
      if (/^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]+$/i.test(value || "")) return true;
      return "Ungültige E-Mail-Adresse";
    },
    betreff(value) {
      if (value) return true;
      return "Wählen Sie Betreff aus.";
    },
    text(value) {
      if (value?.length >= 10) return true;
      return "Text muss mindestens 10 Zeichen lang sein.";
    },
  },
});

const props = defineProps({
  subject: String,
  artItem: String,
});

const name = useField("name");
const email = useField("email");
const betreff = useField("betreff");
if (props.subject) betreff.value.value = ref(props.subject);
const bild = useField("bild");
if (props.artItem) bild.value.value = ref(props.artItem);
const text = useField("text");
const sumbmitted = ref("success");
const error = ref("error");
const loading = ref("info");
const setError = ref("");
const items = ref(["Grafikdesign", "Illustrationen", "Art", "Sonstiges"]);
const itemsArt = ref([
  "Baum des Lebens, 2017, Aquarell",
  "Breaking through to the other side, 2013, Markers, Fineliner",
  "Zodiac, 2015, Copic Markers, Fineliner",
  "Morgenwesen, 2013, Acryl",
  "Geburt der Hamadryaden, 2015, Copic Markers, Fineliner",
  "Dryade, 2015, Copic Markers, Fineliner",
  "Mad tea party, 2013, Markers, Fineliner",
  "Garuda over New Crobuzon, 2019, digital",
  "Just Survive Somehow, 2018, digital",
  "individuelles Kunstwerk",
]);

const alertType = ref("");

async function reset(timeout = 2000) {
  setTimeout(() => {
    alertType.value = "";
    handleReset();
  }, timeout);
}

const submit = handleSubmit(async (values) => {
  alertType.value = loading;
  try {
    await sendEmail(values);
    alertType.value = sumbmitted;
    reset();
  } catch (err) {
    alertType.value = error;
    setError.value = err.toString();
  }
});
</script>
