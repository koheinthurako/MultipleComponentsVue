<template>
  <v-container>
    <div class="cart my-50 mx-5 d-flex flex-wrap">
      <div v-for="product in products" :key="product.id">
        <v-card :title="product.name" :subtitle="product.price" variant="tonal" color="#1867C0" width="250px" style="padding: 10px;">
          <v-card-subtitle>{{ product.order }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="#1867C0" variant="flat" width="100%" @click="addToCart(product)">Add to Cart</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>

import { mapActions } from "vuex";

export default {
  // name: 'HelloWorld',

  data: () => ({
   
    products:[]

  }),

  // website တွေကိုစဖွင့်ရင် ဘာလုပ်ချင်လဲဆိုတာ စရေးနိုင်တဲ့နေရာ
  created() {
    // this.$store ဆိုတာက this က local project ထဲ $store က file name ဖြစ်သွား
    this.products = this.$store.state.products
  },

  methods: {
    // store> index.js ထဲက global ကြေညာထားတဲ့ data တွေကိုပြင်ချင်ရင် mutation ထဲမှာပြင်ရတယ် setter method လိုပဲ
    // keyword => commit သို့သော် mutation ထဲကတိုက်ရိုက်မရေးပဲ actions ထဲမှာ standard ဖြစ်အောင်ရေးလေ့ရှိတယ်
    // နှိပ်လိုက်တဲ့ကောင်ကနေ actions ကိုခေါ်တယ် actions ကနေ mutation ကိုသွားပြင်တယ်

    ...mapActions({
      addToCart:'callAddToCart'
    })
    
    // store>index.js ထဲက actions ကိုလှမ်းခေါ်ရင် dispatch နဲ့ခေါ်တယ်
      // addToCart(product) {
      //   this.$store.dispatch('callAddToCart', product);
      // }

  }

}
</script>
