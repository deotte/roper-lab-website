<template>
  <section class="publications padding flex-column center">
    <div class="container">
      <div class="row mt-2">
        <div class="col">
          <h2>Our Publications</h2>
        </div>
      </div>
      <div class="row mt-4" v-if="loaded && !publicationsFailed">
        <template v-if="publications">
          <Publication
            v-for="(publication, index) of publications"
            :key="index"
            :publication="publication">
          </Publication>
        </template>
      </div>
      <div class="row" v-else-if="!loaded && !publicationsFailed">
        <div class="col loader">
          <h4>Grabbing publications...</h4>
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status" aria-hidden="true"></div>
        </div>
      </div>
      <div class="row mt-4" v-else-if="publicationsFailed && loaded">
        <div class="col">
          <h3>Could not fetch publications</h3>
          <p class="mt-4">Looks like we couldn't fetch publications for the Roper Lab. The Europe PMC site might be down, or you can try refreshing the page.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ApiClient from '../apiClient.js'
import Publication from '@/components/Publication.vue'

export default {
  name: 'Publications',
  components: { Publication },
  data() {
    return {
      api: new ApiClient('https://www.ebi.ac.uk/europepmc/webservices/rest/search'),
      loaded: false,
      publicationsFailed: false,
      publications: []
    }
  },
  created() {
    this.getPublications();
  },
  methods: {
    async getPublications() {
      const response = await this.api.getPublications();

      if (response !== undefined && response.length) {
        this.publications = response;
        this.loaded = true;
      } else {
        this.loaded = true;
        this.publicationsFailed = true;
      }
    }
  }
}
</script>