<template>
  <div class="root">
    New Page
    <div v-for="error in errors">
      {{ error }}
    </div>
    
    <form v-on:submit.prevent="makeActivity()">
      <p>ActivityID: <input type="text" v-model="newActivityID"></p>
      <input type="submit" value="Make A New" Activity>
      <button v-on:click="deleteActivity()">Delete An Itinerary/Activity</button>
      <!-- <button>Make a new activity</button> -->
  </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newActivityID: "",
    };
  },
  created: function() {},
  methods: {
    makeActivity: function() {
      console.log('making new activity');
      var params = {
        activity_id: 50
      };
      axios.post("/api/activity_users", params).then(response => {
        console.log('run smoothly');
        console.log(response);
        this.$router.push("/");
      }).catch(error => {
        console.log('not so smoothly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    },
    deleteActivity: function() {
      console.log('deleting activity');
      axios.delete("/api/activities/" + this.$route.params.id).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>