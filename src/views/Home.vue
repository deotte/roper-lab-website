<template>
  <section class="home padding flex-column center">
    <div class="header">
      <h1>Our Research</h1>
    </div>
    <div class="content">
      <div class="text flex-column center">
        <p>
          Maecenas interdum augue vitae convallis pharetra. Fusce in nisi eu arcu semper dictum id vel risus. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis eros eleifend, tincidunt leo non, blandit ante. Phasellus at euismod velit. 
          Duis bibendum nunc ut est tristique laoreet. Praesent malesuada venenatis nibh, et dapibus tellus ornare quis. Vivamus vulputate pretium blandit. 
          Mauris lectus nibh, mattis pharetra turpis eu, varius mollis velit. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p class="margin-top">
          Ut sodales orci vel porta laoreet. Duis malesuada imperdiet ex in ultricies. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie ultrices tellus. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse tincidunt accumsan condimentum. 
          Aenean eu congue risus.
        </p>
        <router-link to="/" class="action-button extra-margin-top">
          View our research
        </router-link>
      </div>
      <div class="picture flex-column center l-padding">
        <div class="placeholder"></div>
        <span class="margin-top text-center">
          Dolor sit amet, consectetur adipiscing elit. Nunc quis eros eleifend, tincidunt leo non, blandit ante. 
          Phasellus at euismod velit.
        </span>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
