<template>
  <nav class="flex-row half-padding">
    <div class="logo flex-row">
      <img src="../assets/lab_logo.png">
    </div>
    <div class="links flex-row">
      <router-link to="/">Home</router-link>
      <router-link to="/research">Research</router-link>
      <router-link to="/publications">Publications</router-link>
      <router-link to="/people">People</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'Nav'
  }
</script>
