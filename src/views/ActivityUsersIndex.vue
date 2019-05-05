<template>
  <div class="usersindex">
    <u><h1>All Your Activities</h1></u>
    <div v-for="activity in activity_users">
      <!-- <h2>{{ activity.activity_id }}</h2> -->
      <b><h3>{{ activity.activity.name }}</h3></b>
      <img v-bind:src="activity.activity.image_url">
      <b><p>{{ activity.activity.country }}</p></b>
      <!-- <router-link v-bind:to="'/activities/' + activity.id">See more info</router-link>       -->
      <p>{{ activity.activity.description }}</p>
      <u><p>Address: {{ activity.activity.address }}</p></u>
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
      activity_users: [],
      name: "",
      image_url: "",
      country: "",
      description: ""
    };
  },
  created: function() {
    axios.get("/api/activity_users").then(response => {
      this.activity_users = response.data;
      console.log(this.activity_users);
      this.name = response.data;
      console.log(this.name);
      this.image_url = response.data.activity.image_url;
      console.log(this.image_url);
      this.country = response.data.activity.country;
      console.log(this.country);
      this.description = response.data.activity.description;
      console.log(this.description);
      this.address = response.data.activity.address;
      console.log(this.address);
    });
  },
};
</script>