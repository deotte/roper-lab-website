<template>
  <section class="contact padding flex-row center">
    <div class="content flex-row margin-top">
      <div class="text flex-column center r-padding">
        <h1>See our Lab</h1>
        <div class="pictures extra-margin-top">
        </div>
        <a href="" class="action-button extra-margin-top">
          Follow us on Instagram ->
        </a>
      </div>
      <div class="find-us flex-column center l-padding" v-if="locations.length > 0">
        <h1>Find Us</h1>
        <template v-for="(location, index) of locations" :key="index">
          <h3 class="extra-margin-top">{{ location.title }}</h3>
          <template v-for="(field, index) of location.fields" :key="index">
            <a class="margin-top" :href="field"
               v-if="field.includes('https:')">
              {{ field }}
            </a>
            <span class="margin-top" v-else>
              {{ field }}
            </span>
          </template>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  import locations from "@/assets/locations.json"

  export default {
    name: 'Contact',
    data() {
      return {
        locations: []
      }
    },
    created() {
      this.locations = locations;
    }
  }
</script>
