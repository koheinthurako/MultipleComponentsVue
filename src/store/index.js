import { createStore } from 'vuex' 

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Water",
        price: 500
      },
      {
        id: 2,
        name: "Peanut Oil",
        price: 5000
      },
      {
        id: 3,
        name: "Rice",
        price: 6000
      },
      {
        id: 4,
        name: "Salt",
        price: 3000
      },
      {
        id: 5,
        name: "Chicken",
        price: 3500
      },
      {
        id: 6,
        name: "Onion",
        price: 1000
      },
      {
        id: 7,
        name: "Tea",
        price: 700
      },
      {
        id: 8,
        name: "Knife",
        price: 5000
      },
    ]
  },
  getters: {
    // allProducts: (state) => state.products
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
