<!-- <template>
  <div class="home">
    <h1>All itineraries</h1>
    <div v-for="itinerary in itineraries">
      <h2>{{ itinerary.name }}</h2>
      <img v-bind:src="itinerary.images[0].url">
      <p>Name: {{ itinerary.name }}</p>
      <p>Country: {{ itinerary.country }}</p>
      <p>Category: {{ itinerary.category }}</p>
      <p>Description: {{ itinerary.description }}</p>
      <p>Address: {{ itinerary.address }}</p>
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
</script> -->