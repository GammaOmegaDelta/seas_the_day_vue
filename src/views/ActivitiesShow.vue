<template>
  <div class="root">
    <h1>Show Activity</h1>
      <b><p>{{ activity.country }}</p></b>
      <u><b><p>{{ activity.name }}</p></b></u>
      <b><p>{{ activity.category }}</p></b>
      <img v-bind:src="activity.images[0].url">
      <b><p>{{ activity.description }}</p></b>
      <u><b><p>Address: {{ activity.address }}</p></b></u>
      <router-link v-bind:to="'/activities/' + activity.id + '/edit'">Edit Activity</router-link> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      activity: {
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
    axios.get("/api/activities/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.activity = response.data;
    });
  },
  methods: {}
};
</script>