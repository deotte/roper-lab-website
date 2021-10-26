<template>
  <section class="people padding flex-column center">
    <div class="content flex-row center">
      <template v-if="people.length > 0">
        <Profile v-for="(person, index) of people"
                :title="person.title"
                :name="person.name"
                :description="person.description"
                :key="index"></Profile>
      </template>
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
    }
  }
</script>