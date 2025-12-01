<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';

export default {
  components: { Button, FormInput, FormTextarea },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitted: false,
      loading: false
    };
  },
  methods: {
    async sendEmail() {
      this.loading = true;
      try {
        console.log('Données envoyées :', JSON.stringify(this.formData));

        const res = await fetch('http://localhost:3000/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.formData)
        });

        const result = await res.json();

        if (res.ok) {
          this.submitted = true;
          alert(result.message);
          this.formData = { name: '', email: '', subject: '', message: '' };
        } else {
          alert(result.message || 'Erreur lors de l’envoi du mail');
        }
      } catch (err) {
        console.error(err);
        alert('Erreur lors de l’envoi du mail');
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
      <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
        Formulaire de contact
      </p>

      <form @submit.prevent="sendEmail" class="font-general-regular space-y-7">
        <FormInput label="Nom complet" inputIdentifier="name" v-model:val="formData.name" />
        <FormInput label="Email" inputIdentifier="email" inputType="email" v-model:val="formData.email" />
        <FormInput label="Sujet" inputIdentifier="subject" v-model:val="formData.subject" />
        <FormTextarea label="Message" textareaIdentifier="message" v-model:val="formData.message" />

        <div>
          <Button
              title="Envoyer"
              :disabled="loading"
              class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
              type="submit"
              aria-label="Send Message"
          />
        </div>
      </form>

      <div v-if="submitted" class="mt-4 p-3 bg-green-100 text-green-800 rounded">
        Merci ! Votre message a été envoyé.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
