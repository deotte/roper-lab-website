<template>
  <div class="publication flex-row center">
    <div class="text flex-column center lr-padding">
      <h3>{{ publication.title }}</h3>
      <!--
      <p class="margin-top">{{ description }}</p>
      -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Publication',
    props: {
      publication: { type: Object, required: true }
    }
  }
</script>