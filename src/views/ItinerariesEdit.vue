<template>
  <div class="container">
    <h1>New Itinerary</h1>
    <div>
      Name: <input type="text" v-model="newItineraryName">
      Width: <input type="text" v-model="newItineraryWidth">
      Height: <input type="text" v-model="newItineraryHeight">
      <button v-on:click="createItinerary()">Create Itinerary</button>
    </div>
    <h1>All Itineraries</h1>
    <div v-for="itinerary in itineraries">
      <h2>{{ itinerary.name }}</h2>
      <img v-bind:src="itinerary.url">
      <button v-on:click="showItinerary(itinerary)">Show more</button>
      <div v-if="currentItinerary === itinerary">
        <p>Width: {{ itinerary.width }}</p>
        <p>Height: {{ itinerary.height }}</p>
        <div>
          Name: <input type="text" v-model="itinerary.name">
          Width: <input type="text" v-model="itinerary.width">
          Height: <input type="text" v-model="itinerary.height">
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
      newItineraryWidth: "",
      newItineraryHeight: ""
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
        width: this.newItineraryWidth,
        height: this.newItineraryHeight
      };
      axios.post("/api/itineraries", params).then(response => {
        this.itineraries.push(response.data);
        this.newItineraryName = "";
        this.newItineraryWidth = "";
        this.newItineraryHeight = "";
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
        width: itinerary.width,
        height: itinerary.height
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
