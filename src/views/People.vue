<template>
  <section class="people padding flex-column center">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Our Faculty</h2>
        </div>
      </div>
      <div class="row flex-row">
        <template v-if="people.length > 0">
          <Profile v-for="(person, index) of faculty"
                  :title="person.title"
                  :name="person.name"
                  :description="person.description"
                  :key="index"></Profile>
        </template>
      </div>
      <div class="row mt-4">
        <div class="col">
          <h2>Graduate Students</h2>
        </div>
      </div>
      <div class="row flex-row">
        <template v-if="people.length > 0">
          <Profile v-for="(person, index) of graduates"
                  :title="person.title"
                  :name="person.name"
                  :description="person.description"
                  :key="index"></Profile>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  import people from "@/assets/people.json"
  import Profile from "@/components/Profile.vue"

  export default {
    name: 'People',
    components: { Profile },
    data() {
      return {
        people: []
      }
    },
    created() {
      this.people = people;
    },
    computed: {
      faculty() {
        return this.people.filter((person) => person.type === 'faculty');
      },
      graduates() {
        return this.people.filter((person) => person.type === 'graduate');
      }
    }
  }
</script>