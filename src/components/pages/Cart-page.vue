<template>
  <section>
    <Header/>
    <CartEmpty v-if="this.CART.length === 0"/>
    <Cart v-if="this.CART.length > 0"/>
    <TotalPrice v-if="this.CART.length > 0"/>
  </section>
</template>

<script>
import Header from "@/components/views/header/Header";
import CartEmpty from "@/components/views/cart/Cart-empty";
import Cart from "@/components/views/cart/Cart"
import TotalPrice from "@/components/views/cart/Total-price"
import {mapGetters} from "vuex";

export default {
  name: "CartPage",
  components: {
    Header, CartEmpty, Cart, TotalPrice
  },
  computed: {
    ...mapGetters(['CART']),
  }
}
</script>

<style scoped>
section {
  width: 80%;
  margin-top: 0;
}
</style>