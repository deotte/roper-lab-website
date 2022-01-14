<template>
  <div class="col-xs-12 col-md-12 col-lg-6 col-xl-4 mt-4">
    <div class="card">
      <img class="card-img-top" src="../assets/stock_photo.jpeg">
      <div class="card-body">
        <h4 class="card-title mt-2">{{ name }}</h4>
        <template v-if="Array.isArray(title)">
          <span v-for="(title, index) of title"
                :key="index"
                class="mt-4">
            {{ title }}
          </span>
        </template>
        <span class="mt-4" v-else>
          {{ title }}
        </span>
        <p class="card-text mt-4 text-muted">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    props: {
      name: { type: String, required: true },
      title: { type: [String, Array], required: true },
      picture: { type: String, required: false },
      description: { type: String, required: true }
    }
  }
</script>