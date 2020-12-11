<template>
  <v-container class="sm">
    <div class="imagens">
      <v-row >
        <v-col v-for="foto in 12" :key="foto" cols="4">
          <v-card>            
            <v-img
              :src="`https://assets-cdn.kangaroo.com.br/images/grecia/arquitetura-ilha-santorini-grecia.jpg`"
              max-width="100%"
            ></v-img>
            <v-card-text>Sonho Meu</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "PaginaInicial"
};
</script>

<style scoped>
  
</style>