<template>
<section>
    <div class="cart__review">
        <h3>Review your bag.</h3>
        <p>Free delivery and free returns.</p>
    </div>

    <ul id="cart__products">
        <CartItem
                :item_data="item"
                :key="item.id"
                v-for="item in this.CART"/>
    </ul>

</section>
</template>

<script>
    import CartItem from "@/components/views/cart/Cart-item";
    import {mapGetters} from "vuex";

    export default {
        name: "Cart",
        components: {
            CartItem
        },
        computed: mapGetters(['CART'])
    }
</script>

<style scoped>
    section {
        width: 90%;
        /*margin: 10% auto auto;*/
    }
  .cart__review{
    margin-top: 100px;
  }
    #cart__products {
        margin-top: 5%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        list-style: none;
        text-transform: capitalize;
    }

    h3 {
        font-size: 26px;
        color: #000000;
        font-weight: 900;
    }

    p {
        color: #000000;
        font-weight: 200;
        font-size: 1.2em;
    }


</style>