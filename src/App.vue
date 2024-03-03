<template>
  <v-app>
    <v-main>
      
      <v-row class="text-center">
        <v-app-bar color="primary" height="60" elevation="3">
          <div class="routeLinks" style="margin: auto;">
            <router-link class="text-white me-5" to="/" style="text-decoration: none;">HOME</router-link>
            <router-link class="text-white" to="/cart" style="text-decoration: none;">CART</router-link>
          </div>
        </v-app-bar>
      </v-row>

      <router-view/>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
