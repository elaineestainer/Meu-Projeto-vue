<template>
  <v-app>
    <AppNavBar/>
    <v-main>
      <router-view/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppNavBar from './components/shared/AppNavBar';
import AppFooter from './components/shared/AppFooter';

export default {
  name: 'App',

  components: {
    AppNavBar,
    AppFooter
   
  },

  data: () => ({
    //
  }),
};
</script>