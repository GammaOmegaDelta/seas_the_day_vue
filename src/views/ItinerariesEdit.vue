<template>
  <div class="container">
    <h1>Edit Itinerary</h1>
    <div>
      Name: <input type="text" v-model="newItineraryName">
      Country: <input type="text" v-model="newItineraryCountry">
      Category: <input type="text" v-model="newItineraryCategory">
      Description: <input type="text" v-model="newItineraryDescription">
      Address: <input type="text" v-model="newItineraryAddress">
      <button v-on:click="createItinerary()">Create Itinerary</button>
    </div>
    <h1>All Itineraries</h1>
    <div v-for="itinerary in itineraries">
      <h2>{{ itinerary.name }}</h2>
      <img v-bind:src="itinerary.url">
      <button v-on:click="showItinerary(itinerary)">Show more</button>
      <div v-if="currentItinerary === itinerary">
        <p>Country: {{ itinerary.country }}</p>
        <p>Category: {{ itinerary.category }}</p>
        <p>Decription: {{ itinerary.description }}</p>
        <p>Address: {{ itinerary.address }}</p>
        <div>
          Name: <input type="text" v-model="itinerary.name">
          Country: <input type="text" v-model="itinerary.country">
          Category: <input type="text" v-model="itinerary.category">
          Description: <input type="text" v-model="itinerary.description">
          Address: <input type="text" v-model="itinerary.address">
          <button v-on:click="updateItinerary(itinerary)">Update Itinerary</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      itineraries: [],
      currentItinerary: {},
      newItineraryName: "",
      newItineraryCountry: "",
      newItineraryCategory: "",
      newItineraryDescription: "",
      newItineraryAddress: "",
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
        country: this.newItineraryCountry,
        category: this.newItineraryCategory,
        description: this.newItineraryDescription,
        address: this.newItineraryAddress,
      };
      axios.post("/api/itineraries", params).then(response => {
        this.itineraries.push(response.data);
        this.newItineraryName = "";
        this.newItineraryCountry = "";
        this.newItineraryCategory = "";
        this.newItineraryDescription = "";
        this.newItineraryAddress = "";
      });
    },
    showItinerary: function(itinerary) {
      if (this.currentItinerary === itinerary) {
        this.currentItinerary = {};
      } else {
        this.currentItinerary = itinerary;
      }
    },
    updateItinerary: function(itinerary) {
      var params = {
        name: itinerary.name,
        country: itinerary.country,
        category: itinerary.category,
        description: itinerary.description,
        address: itinerary.address,
      };
      axios
        .patch("/api/itineraries/" + itinerary.id, params)
        .then(response => {
          this.currentItinerary = {};
        });
    }
  }
};
</script>
