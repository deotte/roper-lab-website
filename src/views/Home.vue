<template>
  <section class="home padding flex-column center">
    <div class="container">
      <div class="row mt-4 d-lg-none">
        <div class="col">
          <img src="../assets/stock_photo.jpeg" />
        </div>
      </div>
      <div class="row mt-4 mt-lg-0">
        <div class="col">
          <h1>Our Research</h1>
        </div>
      </div>
      <div class="row mt-2 mt-md-4 mt-lg-0">
        <div class="col-xs-12 col-lg-7 v-center">
          <p>
            Our research seeks to understand the genetic and developmental bases of phenotypes related to Trisomy 21 or Down syndrome (DS).  
            We have examined skeletal malformations associated with DS including the typical craniofacial features seen in all 
            individuals with DS as well as changes to the appendicular skeleton. 
          </p>
          <p>
            Using mouse models of Down syndrome, our work provided the first experimental 
            evidence that trisomy adversely affects neural crest cells, precursors to the craniofacial skeleton.
          </p>
          <p>
            Through our preclinical, genetic and phenotypic studies, we will better define how three copies of genes on human chromosome 21 
            cause traits associated with DS as well as understand how genetic variability affects the severity of DS traits. 
            Our long term goal is to apply the knowledge of how and when trisomic genes affect developmental processes to ameliorate Trisomy 21 phenotypes.
          </p>
        </div>
        <div class="col-lg-5 v-center d-none d-lg-flex">
          <img src="../assets/stock_photo.jpeg" />
          <span class="margin-top text-center">
            Currently we are performing preclinical studies to test treatments for specific DS traits by 
            targeting gene products that are overexpressed because of trisomy. 
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col mt-2 mt-md-4 mt-lg-0">
          <router-link to="/research" class="action-button">
            View our research ->
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>
