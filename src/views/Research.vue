<template>
  <section class="research flex-column">
    <div class="header flex-row center">
      <router-link to="/research" class="tab-link r-margin">Brain</router-link>
      <router-link to="/research/eyes" class="tab-link r-margin">Eyes</router-link>
      <router-link to="/research/worms" class="tab-link r-margin">Worms</router-link>
      <router-link to="/research/bones" class="tab-link">Bones</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Research'
  }
</script>