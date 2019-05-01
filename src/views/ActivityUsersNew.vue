F<template>
  <div class="root">
    New Page
    {{ errors }}
    <form v-on:submit.prevent="makeActivity()">
      <p>Name: <input type="text" v-model="newActivityName"></p>
      <p>Country: <input type="text" v-model="newActivityCountry"></p>
      <p>Description: <input type="text" v-model="newActivityDescription"></p>
      <p>Address: <input type="text" v-model="newActivityAddress"></p>
      <input type="submit" value="Make a new activity">
      <!-- <button>Make a new activity</button> -->
  </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newActivityName: "",
      newActivityCountry: "",
      newActivityDescription: "",
      newActivityAddress: ""
    };
  },
  created: function() {},
  methods: {
    makeActivity: function() {
      console.log('making new activity');
      var params = {
        name: this.newActivityName,
        country: this.newActivityCountry,
        description: this.newActivityDescription,
        address: this.newActivityAddress
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
    }
  }
};
</script>