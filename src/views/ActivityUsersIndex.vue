<template>
  <div class="usersindex">
    <u><h1>All Your Activities</h1></u>
    <div v-for="activity in activity_users">
      <h2>{{ activity.activity_id }}</h2>
      <img v-bind:src="activity.image_url">
      <b><p>Country - {{ activity.country }}</p></b>
      <!-- <router-link v-bind:to="'/activities/' + activity.id">See more info</router-link>       -->
      <p>Description: {{ activity.description }}</p>
      <u><p>Address: {{ activity.address }}</p></u>
      <hr>
    </div>
  </div>
</template>

<style>
  img {
    width: 500px;
    height: 300;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      activity_users: []
    };
  },
  created: function() {
    axios.get("/api/activity_users").then(response => {
      this.activity_users = response.data;
      console.log(this.activity_users);
    });
  },
  methods: {}
};
</script>