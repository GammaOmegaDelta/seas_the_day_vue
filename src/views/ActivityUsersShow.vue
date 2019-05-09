<template>
  <div class="home">
    <u><h1>All Activities_User</h1></u>
    <div v-for="activity_user in activity_users">
      <h2>{{ activity_user.name }}</h2>
      <img v-bind:src="activity_user.image_url">
      <b><p>Country - {{ activity_user.country }}</p></b>
      <!-- <router-link v-bind:to="'/activities/' + activity.id">See more info</router-link>       -->
      <p>Description: {{ activity_user.description }}</p>
      <u><p>Address: {{ activity_user.address }}</p></u>
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
// how to get current user's itinerary to show up? how can a user add activities to their itinerary from the home page?
export default {
  data: function() {
    return {
      activity_users: [],
      currentActivity_Users: {},
      name: "",
      country: "",
      image_url: "",
      description: "",
      address: ""
    };
  },
  created: function() {
    axios.get("/api/activity_users").then(response => {
      this.activity_users = response.data;
    });
  },
  methods: {
    showActivityUsers: function(ActivityUsers) {
      if (this.currentActivityUsers === ActivityUsers) {
        this.currentActivityUsers = {};
      } else {
        this.currentActivityUsers = ActivityUsers;
      }
    }
  }
};
</script>
