<template>
  <section class="publications padding flex-column center">
    <div class="header">
      <h2>Our Publications</h2>
    </div>
    <div class="content margin-top flex-row">
      <template v-if="publications">
        <Publication
          v-for="(publication, index) of publications"
          :key="index"
          :publication="publication">
        </Publication>
      </template>
    </div>
    <div>
      <span>
        Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </span>
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