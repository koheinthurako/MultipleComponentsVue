<template>
  <v-app>
    <v-main>
      
      <v-row class="text-center">
        <v-app-bar color="primary" height="60" elevation="3">
          <div class="routeLinks mx-12 d-flex justify-space-between align-center flex-wrap w-100">
            <div class="">
              <router-link class="text-white me-10 font-weight-bold" to="/" style="text-decoration: none;">HOME</router-link>
              <router-link class="text-white me-10 font-weight-bold" to="/testing" style="text-decoration: none;">TESTING</router-link>
            </div>
            <router-link class="text-white font-weight-bold" to="/cart" style="text-decoration: none;">
              <v-btn prepend-icon="mdi-cart" variant="flat" color="#fff">Cart</v-btn>
            </router-link>
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
