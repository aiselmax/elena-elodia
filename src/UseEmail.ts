import { ref, Ref } from "vue";

interface UseEmailResponse {
  submitted: Ref<boolean>;
  loading: Ref<boolean>;
  error: Ref<string | undefined>;
  sendEmail: (data: any) => void;
}

const UseEmail = (endpointUrl: string): UseEmailResponse => {
  const submitted: Ref<boolean> = ref(false);
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | undefined> = ref();

  function sendEmail(data: any): void {
    loading.value = true;
    submitted.value = false;
    error.value = undefined;

    fetch(endpointUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 422) {
          throw new Error("Are you robot?");
        }
        if (response.status !== 200) {
          throw new Error(`${response.statusText} (${response.status})`);
        }
        return response.json();
      })
      .then(() => {
        submitted.value = true;
        loading.value = false;
      })
      .catch((err) => {
        error.value = err.toString();
        loading.value = false;
      });
  }

  return {
    submitted,
    loading,
    error,
    sendEmail,
  };
};

export default UseEmail;
