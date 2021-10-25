<template>
  <section class="home padding flex-column center">
    <div class="content flex-row center">
      <div class="text flex-column center">
        <h1>Our Research</h1>
        <p class="extra-margin-top">
          Maecenas interdum augue vitae convallis pharetra. Fusce in nisi eu arcu semper dictum id vel risus. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis eros eleifend, tincidunt leo non, blandit ante. Phasellus at euismod velit. 
          Duis bibendum nunc ut est tristique laoreet.
        </p>
        <p class="margin-top">
          Ut sodales orci vel porta laoreet. Duis malesuada imperdiet ex in ultricies. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie ultrices tellus. 
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p class="margin-top">
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Ut sodales orci vel porta laoreet. Duis malesuada imperdiet ex in ultricies. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <router-link to="/" class="action-button extra-margin-top">
          View our research ->
        </router-link>
      </div>
      <div class="picture l-padding flex-column center">
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
