<template>
    <div class="cart__empty disabled">
        <div class="cart__title">
            <h3>Your bag is empty.</h3>
            <p>Continue shopping by adding some items in your bag.</p>
        </div>
        <a href="/products">Continue Shopping</a>
    </div>
</template>

<script>
    export default {
        name: "CartEmpty"
    }
</script>

<style scoped>
    * {
        color: #000000;
    }

    a {
        text-decoration: none;
        color: #ffffff;
        border-radius: 12px;
        margin-top: 20px;
        background-color: #005b8f;
        border: none;
        padding: 15px 32px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
    }
</style>