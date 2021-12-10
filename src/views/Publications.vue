<template>
  <section class="publications padding flex-column center">
    <div class="header">
      <h1>Our Publications</h1>
    </div>
    <div class="content flex-row">
      <template v-if="publications">
        <Publication
          v-for="(publication, index) of publications"
          :key="index"
          :publication="publication">
        </Publication>
      </template>
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
      }
    }
  }
}
</script>