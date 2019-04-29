<template>
  <div class="root">
    New Page
    {{ errors }}
    <form v-on:submit.prevent="makeItinerary()">
      <p>Name: <input type="text" v-model="newItineraryName"></p>
      <p>Country: <input type="text" v-model="newItineraryCountry"></p>
      <p>Category: <input type="text" v-model="newItineraryCategory"></p>
      <p>Description: <input type="text" v-model="newItineraryDescription"></p>
      <p>Address: <input type="text" v-model="newItineraryAddress"></p>
      <input type="submit" value="Make a new itinerary">
      <!-- <button>Make a new itinerary</button> -->
  </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newItineraryName: "",
      newItineraryCountry: "",
      newItineraryCategory: "",
      newItineraryDescription: "",
      newItineraryAddress: ""
    };
  },
  created: function() {},
  methods: {
    makeItinerary: function() {
      console.log('making new itinerary');
      var params = {
        name: this.newItineraryName,
        country: this.newItineraryCountry,
        category: this.newItineraryCategory,
        description: this.newItineraryDescription,
        address: this.newItineraryAddress
      };

      axios.post("/api/itineraries", params).then(response => {
        console.log('run smoothly');
        console.log(response);
        this.$router.push("/");
      }).catch(error => {
        console.log('not so smoothly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>