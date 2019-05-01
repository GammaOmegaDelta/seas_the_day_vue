<template>
  <div class="home">
    <u><h1>All Activities</h1></u>
    <div v-for="activity in activities">
      <h2>{{ activity.name }}</h2>
      <img v-bind:src="activity.image_url">
      <b><p>Country - {{ activity.country }}</p></b>
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