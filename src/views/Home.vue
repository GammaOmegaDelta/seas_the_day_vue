<template>
  <div class="home">
    <u><h1>All Activities</h1></u>
    <div v-for="activity in activities">
      <h2>{{ activity.name }}</h2>
      <b><p>{{ activity.country }}</p></b> 
      <img v-bind:src="activity.image_url">   
      <router-link v-bind:to="'/activities/' + activity.id">See more info</router-link>
      <!-- <p>Description: {{ activity.description }}</p>
      <u><p>Address: {{ activity.address }}</p></u> -->
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
      activities: []
    };
  },
  created: function() {
    axios.get("/api/activities").then(response => {
      this.activities = response.data;
    });
  },
  methods: {}
};
</script>