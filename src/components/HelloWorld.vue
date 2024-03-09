<template>
  <v-container>
    <div class="cart my-50 mx-5 d-flex flex-wrap">
      <div v-for="product in products" :key="product.id">
        <v-card :title="product.name" :subtitle="product.price" variant="tonal" color="#1867C0" width="250px" style="padding: 10px;">
          <v-card-actions>
            <v-btn color="#1867C0" variant="flat" width="100%">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>

export default {
  // name: 'HelloWorld',

  data: () => ({
   
    products:[]

  }),

  // website တွေကိုစဖွင့်ရင် ဘာလုပ်ချင်လဲဆိုတာ စရေးနိုင်တဲ့နေရာ
  created() {
    // this.$store ဆိုတာက this က local project ထဲ $store က file name ဖြစ်သွား
    this.products = this.$store.state.products
  }

}
</script>
