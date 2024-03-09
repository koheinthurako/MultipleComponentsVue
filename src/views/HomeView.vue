<template>
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  // HelloWorld ဆိုတဲ့ component ကိုခေါ်ပြီးတော့ အပေါ်က template ထဲမှာပြန်သုံးပြီး rendering လုပ်
  components: {
    HelloWorld,
  },
});
</script>
