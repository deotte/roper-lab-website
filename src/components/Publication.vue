<template>
  <div class="publication padding flex-row center">
    <div class="text lr-padding flex-column">
      <h4>{{ publication.title }}</h4>
      <p class="margin-top">{{ publication.authors }}</p>
      <div class="dates-ids flex-row margin-top">
        <span v-if="publication.pmId">
          <strong>PM ID</strong>: {{ publication.pmId }}
        </span>
        <span v-else>
          <strong>PM ID</strong>: N/A
        </span>

        <span v-if="publication.pmcId">
          <strong>PMC ID</strong>: {{ publication.pmcId }}
        </span>
        <span v-else>
          <strong>PMC ID</strong>: N/A
        </span>

        <span><strong>Publish Date</strong>: {{ publication.date }}</span>
      </div>
    </div>
    <div class="logo flex-row center">
      <img src="../assets/paper.png" />
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