<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>
    
    <v-row>
      <v-col v-for="clube  of PokemonLista" :key="clube.id">
        <v-card>
          <v-avatar size="80">
            <v-img :src="clube.escudo" :alt="clube.nome"></v-img>
          </v-avatar>
          <v-card-text class="pl-2">{{ clube.nome }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Pokemon",
  data() {
    return {
      PokemonLista: []
    };
  },
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then(resposta => resposta.json())
      .then(json => {
        this.PokemonLista = json;
        console.log(this.PokemonLista);
      });
  }
};
</script>

<style scoped>



</style>