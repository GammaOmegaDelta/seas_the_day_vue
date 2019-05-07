<template>
  <div class="root">
    <h1><u>Activity</u></h1>
      <u><b><p>{{ activity.name }}</p></b></u>
      <b><p>{{ activity.country }}</p></b>
      <b><p>{{ activity.category }}</p></b>
      <img v-bind:src="activity.image_url">
      <b><p>{{ activity.description }}</p></b>
      <u><b><p>Address: {{ activity.address }}</p></b></u>
      <button v-on:click="addActivity()">Add Activity</button>
      <!-- below, only admin can edit/delete/update an activity within the home pg. Work in Progress-->
     <!--  <router-link v-bind:to="'/activities/' + activity.id + '/edit'">Edit Activity</router-link> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      activity: {
        name: "",
        country: "",
        image_url: "",
        description: "",
        address: ""
      }
    };
  },
  created: function() {
    axios.get("/api/activities/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.activity = response.data;
    });
  },
  methods: {
    addActivity: function() {
      console.log('making new activity');
      var params = {
        activity_id: this.$route.params.id
      };
      console.log(this.$route.params.id);
      axios.post("/api/activity_users", params).then(response => {
        console.log('run smoothly');
        console.log(response);
        this.$router.push("/activityusersindex");
      }).catch(error => {
        console.log('not so smoothly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
      console.log("in addActivity");
    }
  },
};
</script>