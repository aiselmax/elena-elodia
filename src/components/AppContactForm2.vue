<template>
  <v-form @submit="onSubmit">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="name"
          label="Name"
          :error-messages="nameError"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="email"
          label="Email"
          :error-messages="emailError"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-select
          v-model="subject"
          :items="subjectOptions"
          label="Betreff"
          :error-messages="subjectError"
          required
        ></v-select>
      </v-col>
      <v-col cols="12" md="6">
        <Transition name="slide-fade">
          <v-select
            v-if="isArtSelected"
            v-model="image"
            :items="imageOptions"
            label="Bild"
            multiple
            chips
            :error-messages="imageError"
          ></v-select>
        </Transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          v-model="message"
          label="Nachricht"
          :error-messages="messageError"
          required
        ></v-textarea>
      </v-col>
    </v-row>
    <v-btn class="me-4" type="submit"> Senden </v-btn>
    <v-btn variant="text" @click="handleReset"> löschen </v-btn>
    <div class="my-5">
      <App-Alert :type="alertType" :message="setError"></App-Alert>
    </div>
  </v-form>
</template>
<script lang="ts" setup>
import { defineComponent, computed, ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { sendEmail } from "@/utilities/formSubmitEmailJS";
import AppAlert from "./AppAlert.vue";

const subjectOptions = ["Grafikdesign", "Illustrationen", "Art", "Sonstiges"];
const imageOptions = [
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
];

const schema = yup.object({
  name: yup
    .string()
    .min(3, "Name muss mindestens 3 Zeichen lang sein")
    .required("Name ist erforderlich"),
  email: yup
    .string()
    .email("Ungültige E-Mail-Adresse")
    .required("Email ist erforderlich"),
  subject: yup.string().min(1, "Wählen Sie Betreff aus.").required(),
  message: yup
    .string()
    .min(10, "Nachricht muss mindestens 10 Zeichen lang sein")
    .required("Nachricht ist erforderlich"),
  image: yup.array().nullable(),
});

const { handleSubmit, handleReset } = useForm({
  validationSchema: schema,
});

const sumbmitted = ref("success");
const error = ref("error");
const loading = ref("info");
const setError = ref("");
const alertType = ref("");

const onSubmit = handleSubmit(async (values) => {
  alertType.value = loading.value;
  try {
    await sendEmail(values);
    alertType.value = sumbmitted.value;
    reset();
  } catch (err: unknown) {
    alertType.value = error.value;
    setError.value = String(err);
  }
});

const { value: name, errorMessage: nameError } = useField("name");
const { value: email, errorMessage: emailError } = useField("email");
const { value: subject, errorMessage: subjectError } = useField("subject");
const { value: message, errorMessage: messageError } = useField("message");
const { value: image, errorMessage: imageError } = useField<string[]>("image");

// Computed property to check if "Art" is selected
const isArtSelected = computed(() => subject.value === "Art");

async function reset(timeout = 2000) {
  setTimeout(() => {
    alertType.value = "";
    handleReset();
  }, timeout);
}
</script>
