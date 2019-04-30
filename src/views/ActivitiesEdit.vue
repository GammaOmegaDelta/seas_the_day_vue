<template>
  <div class="root">
    Edit Page
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="updateActivity()">
     <p>Name: <input type="text" v-model="activity.name"></p>
     <p>Country: <input type="text" v-model="activity.country"></p>
     <p>Category: <input type="text" v-model="activity.category"></p>
     <p>Description: <input type="text" v-model="activity.description"></p>
     <p>Address: <input type="text" v-model="activity.address"></p>
     <p>Image Url: <input type="text" v-model="activity.image_url"></p>
     <input type="submit" value="Update Activity">
   </form>
   <button v-on:click="deleteActivity()">Delete Activity</button>
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
        description: "",
        address: "",
      },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/activities/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.activity = response.data;
    });
  },
  methods: {
    updateActivity: function() {
      console.log('making new activity');
      var params = {
        name: this.activity.name,
        country: this.activity.country,
        description: this.activity.description,
        address: this.activity.address
      };

      console.log(params);

      axios.patch("/api/activities/" + this.$route.params.id, params).then(response => {
        console.log('run smoothly');
        console.log(response);
        this.$router.push("/activities/" + this.$route.params.id, params);
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