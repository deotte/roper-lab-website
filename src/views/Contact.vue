<template>
  <section class="contact padding flex-row center">
    <div class="container mt-2">
      <div class="row mt-lg-0">
        <div class="col">
          <h2>Connect with Us</h2>
        </div>
      </div>
      <div class="row mt-lg-4 mt-xl-2">
        <div class="col lg-8 d-none d-lg-block me-lg-4">
          <a 
            class="twitter-timeline"
            href="https://twitter.com/RoperLab_IUPUI?ref_src=twsrc%5Etfw"
            data-height="600">
            Tweets by RoperLab_IUPUI
          </a>
        </div>
        <div class="col-lg-4 mt-2 mt-md-4 ms-lg-4">
          <template v-for="(location, index) of locations" :key="index">
            <h4 :class="marginClass(index)">
              {{ location.title }}
            </h4>
            <div class="fields mt-4 ms-2">
              <template v-for="(field, index) of location.fields" :key="index">
                  <a :href="field"
                     v-if="field.includes('https:')">
                    {{ field }}
                  </a>
                  <span class="mt-3" v-else>
                    {{ field }}
                  </span>
              </template>
            </div>
          </template>
        </div>
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
    },
    methods: {
      isFirstElement(index) {
        return index === 0;
      },
      marginClass(index) {
        return this.isFirstElement(index) ? 'margin-top' : 'extra-margin-top';
      }
    }
  }
</script>
