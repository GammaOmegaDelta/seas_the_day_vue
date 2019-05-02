<template>
  <div class="root">
    <h1>Show Activity</h1>
      <b><p>{{ activity.country }}</p></b>
      <u><b><p>{{ activity.name }}</p></b></u>
      <b><p>{{ activity.category }}</p></b>
      <img v-bind:src="activity.image_url">
      <b><p>{{ activity.description }}</p></b>
      <u><b><p>Address: {{ activity.address }}</p></b></u>
      <!-- below, only admin can edit/delete/update an activity within the home pg. Work in Progress-->
      <router-link v-bind:to="'/activities/' + activity.id + '/edit'">Edit Activity</router-link> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      activity: {
        name: "",
        country: "",
        image_url: "",
        description: "",
        address: ""
      }
    };
  },
  created: function() {
    axios.get("/api/activities/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.activity = response.data;
    });
  },
  methods: {}
};
</script>