<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/lab_logo.png" />
      </a>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-auto ms-lg-0">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item mx-auto ms-lg-4">
            <router-link to="/publications" class="nav-link">Publications</router-link>
          </li>
          <li class="nav-item mx-auto ms-lg-4">
            <router-link to="/research" class="nav-link">Research</router-link>
          </li>
          <li class="nav-item mx-auto ms-lg-4">
            <router-link to="/people" class="nav-link">People</router-link>
          </li>
          <li class="nav-item mx-auto ms-lg-4">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'Nav'
  }
</script>
