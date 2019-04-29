<template>
  <div class="home">
    <u><h1>All Itineraries</h1></u>
    <div v-for="itinerary in itineraries">
      <h2>{{ itinerary.name }}</h2>
      <img v-bind:src="itinerary.images[0].url">
      <p>Country: {{ itinerary.country }}</p>
      <p>Category: {{ itinerary.category }}</p>
      <p>Description: {{ itinerary.description }}</p>
      <u><p>Address: {{ itinerary.address }}</p></u>
      <router-link v-bind:to="'/itineraries/' + itinerary.id">See more info</router-link>
      <hr>
    </div>
  </div>
</template>

<style>
  img {
    width: 500px;
    height: 250;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      itineraries: []
    };
  },
  created: function() {
    axios.get("/api/itineraries").then(response => {
      this.itineraries = response.data;
    });
  },
  methods: {}
};
</script>