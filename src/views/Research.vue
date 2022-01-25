<template>
  <section class="research padding flex-column center">
    <div class="container">
      <div class="row mt-2">
        <div class="col-sm-12 col-lg-4 d-flex d-lg-block">
          <h2 class="mx-auto mx-lg-0">Current Research</h2>
        </div>
        <div class="col-sm-12 col-lg-8 d-flex flex-column flex-lg-row">
          <router-link to="/research" class="tab-link mt-3 mt-lg-0 mx-auto">Brain</router-link>
          <router-link to="/research/eyes" class="tab-link mt-3 mt-lg-0 mx-auto ms-lg-3">Eyes</router-link>
          <router-link to="/research/worms" class="tab-link mt-3 mt-lg-0 mx-auto ms-lg-3">Worms</router-link>
          <router-link to="/research/bones" class="tab-link mt-3 mt-lg-0 mx-auto ms-lg-3">Bones</router-link>
        </div>
      </div>
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