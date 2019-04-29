<template>
  <div class="root">
    Edit Page
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="updateItinerary()">
     <p>Name: <input type="text" v-model="itinerary.name"></p>
     <p>Country: <input type="text" v-model="itinerary.country"></p>
     <p>Category: <input type="text" v-model="itinerary.category"></p>
     <p>Description: <input type="text" v-model="itinerary.description"></p>
     <p>Address: <input type="text" v-model="itinerary.address"></p>
     <p>Image Url: <input type="text" v-model="itinerary.image_url"></p>
     <input type="submit" value="Update Itinerary">
   </form>
   <button v-on:click="deleteItinerary()">Delete Iti9nerary</button>
 </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      itinerary: {
        name: "",
        country: "",
        category: "",
        description: "",
        address: "",
      },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/itineraries/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.itinerary = response.data;
    });
  },
  methods: {
    updateItinerary: function() {
      console.log('making new itinerary');
      var params = {
        name: this.itinerary.name,
        country: this.itinerary.country,
        category: this.itinerary.category,
        description: this.itinerary.description,
        address: this.itinerary.address
      };

      console.log(params);

      axios.patch("/api/itineraries/" + this.$route.params.id, params).then(response => {
        console.log('run smoothly');
        console.log(response);
        this.$router.push("/itineraries/" + this.$route.params.id, params);
      }).catch(error => {
        console.log('not so smoothly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    },
    deleteItineray: function() {
      console.log('deleting itinerary');
      axios.delete("/api/itineraries/" + this.$route.params.id).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>