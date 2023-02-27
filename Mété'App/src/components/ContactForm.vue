<template>
  <form @submit.prevent="submitForm" class="pageContact">
    <div class="form">
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="name" required />
    </div>
    <div class="form">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
    </div>
    <div class="form">
      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>
    </div>
    <button type="submit" class="btn">Envoyer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      // Send the form data to the server or handle it in some other way
      console.log(formData);
      // Reset the form fields
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.pageContact {
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  gap: 40px;
}

.btn {
  background-color: #cf8e80;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  cursor: pointer;
  border: none;
  color: white;
  padding: 10px;
  width: 150px;
}

.btn:hover {
  background-color: #c68a7d;
}

.form {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  border: none;
  border-radius: 10px;
}

input {
  height: 30px;
}

textarea {
  height: 60px;
}
</style>
