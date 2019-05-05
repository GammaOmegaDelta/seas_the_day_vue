<template>
  <div id="app">
    <div id="nav">
        <header class="box-header">
            <div class="box-logo">
                <!-- <a href="index.html"><img src="img/logo.png" width="80" alt="Logo"></a> -->
            </div>
            <a class="box-primary-nav-trigger" href="#0">
                <span class="box-menu-text">Menu</span><span class="box-menu-icon"></span>
            </a>
        </header>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/activityusersindex">Your Itinerary</router-link> |
      <router-link to="/activityusers/new">New Itinerary</router-link> |
      <router-link to="/logout">Logout</router-link> |
      <router-link to="/about">About</router-link> |
      </div>
      
    <router-view/>

    <footer>
        <div class="container-fluid">
            <p class="copyright">© Box Portfolio 2016</p>
        </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
