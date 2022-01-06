<template>
  <section class="contact padding flex-row center">
    <div class="content flex-row margin-top" v-if="loaded">
      <div class="text flex-column center r-padding">
        <div class="pictures">
          <a 
            class="twitter-timeline"
            href="https://twitter.com/RoperLab_IUPUI?ref_src=twsrc%5Etfw"
            data-height="600">
            Tweets by RoperLab_IUPUI
          </a>
        </div>
      </div>
      <div class="find-us flex-column center l-padding" v-if="locations.length > 0">
        <h2>Find Us</h2>
        <template v-for="(location, index) of locations" :key="index">
          <h4 class="extra-margin-top">{{ location.title }}</h4>
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
        loaded: false,
        locations: []
      }
    },
    created() {
      this.locations = locations;
    },
    mounted() {
      let twitterScript = document.createElement('script');
      twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      twitterScript.setAttribute('charset', 'utf-8');
      document.head.appendChild(twitterScript);
      this.loaded = true;
    }
  }
</script>
