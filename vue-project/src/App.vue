<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <div class="container">
    <div>
      <h1>HOME</h1>
    </div>
    <nav>
      <ul>
        <li>
          <RouterLink active-class="active" to="/home">home</RouterLink>
        </li>
        <li>
          <RouterLink active-class="active" to="/counter">counter</RouterLink>
        </li>
        <li>
          <RouterLink active-class="active" to="/note">note</RouterLink>
        </li>
        <li>
          <RouterLink active-class="active" to="/quiz">quiz</RouterLink>
        </li>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>


<style scoped>
.container {
  width: 1200px;
  height: 100vh;
  padding-top: 30px;
}

.active {
  color: red;
}

nav ul {
  display: flex;
  justify-content: space-evenly;
}
</style>