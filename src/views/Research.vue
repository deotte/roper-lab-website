<template>
  <section class="research padding flex-column center">
    <div class="container">
      <div class="row">
        <div class="col xs-12 lg-5 flex-row">
          <h2>Current Research</h2>
        </div>
        <div class="col xs-12 lg-7 flex-row mt-3 mt-lg-0">
          <router-link to="/research" class="tab-link r-margin">Brain</router-link>
          <router-link to="/research/eyes" class="tab-link r-margin">Eyes</router-link>
          <router-link to="/research/worms" class="tab-link r-margin">Worms</router-link>
          <router-link to="/research/bones" class="tab-link">Bones</router-link>
        </div>
      </div>
      <!--
      <div class="row margin-top">
        <div class="col flex-row">
          <router-link to="/research" class="tab-link r-margin">Brain</router-link>
          <router-link to="/research/eyes" class="tab-link r-margin">Eyes</router-link>
          <router-link to="/research/worms" class="tab-link r-margin">Worms</router-link>
          <router-link to="/research/bones" class="tab-link">Bones</router-link>
        </div>
      </div>
      -->
      <div class="row extra-margin-top">
        <div class="col content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Research'
  }
</script>