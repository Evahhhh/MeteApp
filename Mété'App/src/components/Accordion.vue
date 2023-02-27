<template>
  <div class="accordion">
    <p
      @click="toggleAccordion()"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <slot name="title" />
    </p>

    <div v-show="isOpen" :id="`collapse${_uid}`" class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped>
.accordion {
  color: black;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease-in-out;
}

.accordion:hover {
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
