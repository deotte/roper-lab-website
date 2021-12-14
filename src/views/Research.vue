<template>
  <section class="research padding flex-column center">
    <div class="header flex-row margin-top">
      <h1>Current Research</h1>
    </div>
    <div class="header flex-row margin-top">
      <router-link to="/research" class="tab-link r-margin">Brain</router-link>
      <router-link to="/research/eyes" class="tab-link r-margin">Eyes</router-link>
      <router-link to="/research/worms" class="tab-link r-margin">Worms</router-link>
      <router-link to="/research/bones" class="tab-link">Bones</router-link>
    </div>
    <div class="content extra-margin-top">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Research'
  }
</script>