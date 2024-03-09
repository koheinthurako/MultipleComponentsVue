// import { map } from 'core-js/core/array'
import { createStore } from 'vuex' 

export default createStore({
  // global ကြေညာချင်တဲ့ data တွေကို state ထဲထည့်ရေးတယ်
  state: {
    products: [
      {
        id: 1,
        name: "Water",
        price: 500,
        order: false
      },
      {
        id: 2,
        name: "Peanut Oil",
        price: 5000,
        order: false
      },
      {
        id: 3,
        name: "Rice",
        price: 6000,
        order: false
      },
      {
        id: 4,
        name: "Salt",
        price: 3000,
        order: false
      },
      {
        id: 5,
        name: "Chicken",
        price: 3500,
        order: false
      },
      {
        id: 6,
        name: "Onion",
        price: 1000,
        order: false
      },
      {
        id: 7,
        name: "Tea",
        price: 700,
        order: false
      },
      {
        id: 8,
        name: "Knife",
        price: 5000,
        order: false
      },
    ]
  },
  getters: {
    // allProducts: (state) => state.products
  },
  mutations: { // commit
    AddToCart(state, product) {
      this.products = state.products.map(
        function (pp) {
          if(pp.id === product.id) {
            pp.order = true;
          }
        }
      )
      }
  },
  actions: {
    // actions ထဲမှာ project တစ်ခုလုံးရဲ့ တွက်ချက်ဘာညာ business logic တွေရေးလေ့ရှိတယ်
    callAddToCart(context, product) {
      // commit ထဲကအရှေ့ဟာက mutation ကို invoke လုပ်တာ နောက်က parameter passing
      context.commit('AddToCart', product)
    }
  },
  modules: {
  }
})
