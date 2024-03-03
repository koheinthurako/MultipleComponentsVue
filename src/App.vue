<template>
  <v-app>
    <v-main>
      
      <v-row class="text-center">
        <v-app-bar color="primary" height="60" elevation="3">
          <div class="ms-12 me-12 w-100 d-flex justify-space-between align-center flex-wrap">
            <div class="routeLinks">
              <router-link class="text-white me-10 font-weight-bold" to="/" style="text-decoration: none;">HOME</router-link>
              <router-link class="text-white font-weight-bold" to="/item" style="text-decoration: none;">ITEMS</router-link>
            </div>
            <v-btn prepend-icon="mdi-cart" variant="flat" color="#fff">Cart</v-btn>
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
