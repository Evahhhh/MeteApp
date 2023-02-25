<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
</template>
  
<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                message: ''
            }
        },
        methods: {
            submitForm() {
                const formData = {
                name: this.name,
                email: this.email,
                message: this.message
                }
                // Send the form data to the server or handle it in some other way
                console.log(formData)
                // Reset the form fields
                this.name = ''
                this.email = ''
                this.message = ''
            }
        }
    }
  </script>