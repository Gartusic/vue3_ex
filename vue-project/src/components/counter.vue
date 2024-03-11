<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <h4>
      The current count is...
    </h4>
    <h1>
      {{ count }}
    </h1>
    <button @click="count--">-</button>
    <button @click="count++">+</button>
  </div>
</template>

<style scoped>
div {
  width: 500px;
}
</style>