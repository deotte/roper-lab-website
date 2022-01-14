<template>
  <div class="publication col-xs-12 col-lg-6 mb-4">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">{{ publication.title }}</h4>
      </div>
      <div class="card-body">
        <h5 class="card-subtitle">Authors</h5>
        <p class="card-text mt-3">{{ publication.authors }}</p>
        <div class="dates-ids">
          <span><strong>Publish Date</strong>: {{ publication.date }}</span>

          <span v-if="publication.pmId" class="mt-2 mt-md-0">
              <strong>PM ID</strong>: {{ publication.pmId }}
          </span>
          <span class="mt-2" v-else>
            <strong>PM ID</strong>: N/A
          </span>
        </div>
        <a :href="publication.url" target="_blank" class="card-link mt-3">
          View Article ->
        </a>
      </div>
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