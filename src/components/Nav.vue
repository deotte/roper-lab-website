<template>
  <nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4 v-center">
          <img src="../assets/lab_logo.png">
        </div>
        <div class="col-8">
          <router-link to="/">Home</router-link>
          <router-link to="/research">Research</router-link>
          <router-link to="/publications">Publications</router-link>
          <router-link to="/people">People</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'Nav'
  }
</script>
