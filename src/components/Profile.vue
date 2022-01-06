<template>
  <div class="profile flex-row center">
    <div class="picture flex-column center"><div class="placeholder"></div></div>
    <div class="text flex-column center lr-padding">
      <h4>{{ name }}</h4>
      <template v-if="Array.isArray(title)">
        <span v-for="(title, index) of title"
              :key="index"
              class="margin-top">
          {{ title }}
        </span>
      </template>
      <template v-else>
        <span class="margin-top">{{ title }}</span>
      </template>
      <p class="margin-top">{{ description }}</p>
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