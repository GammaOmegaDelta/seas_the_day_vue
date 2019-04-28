<template>
  <div class="container">
    <h1>New Itinerary</h1>
    <div>
      Name: <input type="text" v-model="newItineraryName">
      Category: <input type="text" v-model="newItineraryCategory">
      Description: <input type="text" v-model="newItineraryDescription">
      Address: <input type="text" v-model="newItineraryAddresss">
      <button v-on:click="createItinerary()">Create Itinerary</button>
    </div>
    <h1>All Itineraries</h1>
    <div v-for="itinerary in itineraries">
      <h2>{{ itinerary.name }}</h2>
      <img v-bind:src="itinerary.url">
      <p>Category: {{ itinerary.category }}</p>
      <p>Description: {{ itinerary.description }}</p>
      <p>Address: {{ itinerary.address }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      itineraries: [],
      newItineraryName: "",
      newItineraryCategory: "",
      newItineraryDescription: "",
      newItineraryAddresss: "",
    };
  },
  created: function() {
    axios.get("/api/itineraries").then(response => {
      this.itineraries = response.data;
    });
  },
  methods: {
    createItinerary: function() {
      var params = {
        name: this.newItineraryName,
        category: this.newItineraryCategory,
        description: this.newItineraryDescription,
        address: this.newItineraryAddress,
      };
      axios.post("/api/itineraries", params).then(response => {
        this.itineraries.push(response.data);
        this.newItineraryName = "";
        this.newItineraryCategory = "";
        this.newItineraryDescription = "";
        this.newItineraryAddress = "";
      });
    }
  }
};
</script>
