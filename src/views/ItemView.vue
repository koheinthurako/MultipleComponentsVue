<template>
  <div class="cart mt-50 mx-5 d-flex flex-wrap">
    <!-- <v-card title="Card title" subtitle="Subtitle" text="Water" color="primary" width="300px" style="padding: 10px;">
      <v-card-actions>
        <v-btn variant="tonal" width="100%">Click me</v-btn>
      </v-card-actions>
    </v-card> -->
    <div v-for="product in products" :key="product.id">
      <v-card :title="product.name" :subtitle="product.price" variant="tonal" color="#1867C0" width="300px" style="padding: 10px;">
        <v-card-actions>
          <v-btn color="#1867C0" variant="flat" width="100%">Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>

  export default {
    name: "itemView",

    data: () => {
      // msg: "Test Title"
    },

    computed: {
    products() {
      // Retrieve all products using the getter
      return this.$store.getters.allProducts;
    }
  }

  }

</script>
