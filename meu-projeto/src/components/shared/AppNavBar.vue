<template>
 <div class="app-nav-bar">
 
    <v-app-bar app color="amber darken 1" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Meu projeto</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer color="#FF8F00" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="amber--text text--lighten-4">

          <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-airplane-takeoff</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/Pokemon">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pokemon</v-list-item-title>
          </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>   

</template>

<script>
export default {
    name: "AppNavBar",
    data:() => ({
      drawer: false,
      group: null
    }), 
    
    }    

</script>

<style scoped>
  .app-nav-bar a{
    text-decoration: none;
  }
</style>