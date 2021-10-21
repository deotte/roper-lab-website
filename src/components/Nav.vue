<template>
  <nav class="flex-row padding">
    <div class="logo flex-row">
      <h1>Roper Lab</h1>
    </div>
    <div class="links flex-row">
      <router-link to="/">Home</router-link>
      <router-link to="/">Research</router-link>
      <router-link to="/">Publications</router-link>
      <router-link to="/">People</router-link>
      <router-link to="/about">Contact</router-link>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'Nav'
  }
</script>
