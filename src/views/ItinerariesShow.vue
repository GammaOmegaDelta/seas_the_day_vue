<template>
  <div class="root">
    <h1>Show Itinerary</h1>
      <b><p>{{ itinerary.country }}</p></b>
      <u><b><p>{{ itinerary.name }}</p></b></u>
      <img v-bind:src="itinerary.images[0].url">
      <b><p>{{ itinerary.category }}</p></b>
      <b><p>{{ itinerary.description }}</p></b>
      <u><p>Address: {{ itinerary.address }}</p></u>
      <router-link v-bind:to="'/itineraries/' + itinerary.id + '/edit'">Edit Itinerary</router-link> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      itinerary: {
        name: "monkey park",
        country: "japan",
        image_url: "",
        category: "day trip",
        description: "hike up the mountains to see where the monkeys reside",
        address: "arashiyma"
      }
    };
  },
  created: function() {
    axios.get("/api/itineraries/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.itinerary = response.data;
    });
  },
  methods: {}
};
</script>