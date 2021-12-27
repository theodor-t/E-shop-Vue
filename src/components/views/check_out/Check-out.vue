<template>
    <div class="check__out__window disabled">
        <CheckOutPopup @close="showPopup = false" v-if="showPopup"/>
        <div class="check__out__exit">
            <a id="check__out__close"><em class="far fa-times-circle"></em></a>
        </div>

        <div class="check__out__method__container">
            <a class="active" id="deliver">Deliver to me</a>
            <a id="take">I'll pick it up</a>
        </div>

        <div class="deliver__container">
            <span id="error__container"></span>
            <div class="information__container">
                <div class="name__container">
                    <span>Name</span>
                    <label for="name">
                        <input id="name" pattern="[a-zA-Z]*" type="text">
                    </label>
                </div>
                <div class="surname__container">
                    <span>Surname</span>
                    <label for="surname">
                        <input id="surname" pattern="[a-zA-Z]*" type="text">
                    </label>
                </div>
                <div class="address__container">
                    <span>Address</span>
                    <label for="address">
                        <input id="address" type="text">
                    </label>
                </div>
                <div class="city__container">
                    <span>City</span>
                    <label for="city">
                        <input id="city" type="text">
                    </label>
                </div>

                <div class="country__container">
                    <span>Country</span>
                    <label for="country">
                        <input id="country" type="text">
                    </label>
                </div>

                <div class="phone__container">
                    <span>Phone</span>
                    <label for="phone">
                        <input id="phone" type="text">
                    </label>
                </div>

                <div class="payment__container">
                    <span>Payment Method</span>
                    <a>Credit</a>
                    <a>Cash</a>
                    <a>Card</a>
                </div>
            </div>
            <a @click="showPopup = true" id="order">Order</a>
        </div>
    </div>
</template>

<script>
    import CheckOutPopup from "@/components/views/check_out/Check-out-popup"

    export default {
        name: "Check-out",
        data: () => ({
            showPopup: false
        }),
        components: {
            CheckOutPopup
        }
    }
</script>

<style scoped>
    #order {
        border-radius: 12px;
        margin-top: 20px;
        background-color: yellow;
        border: 1px solid black;
        padding: 15px 32px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
    }

    .check__out__window {
        width: 80%;
        background-color: whitesmoke;
        opacity: 0.96;
        border-radius: 30px;
        position: absolute;
        padding: 30px 30px;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 100000;
    }

    .check__out__address__container span {
        display: block;
    }

    .check__out__exit em {
        float: right;
        font-size: 25px;
    }

    .address__container input {
        position: relative;
        display: flex;
        width: 300px;
        flex-direction: row;
        padding: 0.5rem 0.5rem 0.5rem;
    }

    .information__container input {
        background: transparent;
        outline: none;
        border: 1px solid black;
        border-radius: 35px;
        padding: .5rem .5rem .3rem .3rem;
    }

    .information__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 10px;
    }

    .information__container span {
        display: block;
    }

    .name__container {
        grid-area: 1 / 1 / 2 / 2;
    }

    .surname__container {
        grid-area: 1 / 2 / 2 / 3;
    }

    .address__container {
        grid-area: 2 / 1 / 3 / 3;
    }

    .city__container {
        grid-area: 3 / 1 / 4 / 2;
    }

    .country__container {
        grid-area: 3 / 2 / 4 / 3;
    }

    .phone__container {
        grid-area: 4 / 1 / 5 / 2;
    }

    .payment__container {
        grid-area: 4 / 2 / 5 / 3;
    }


    .check__out__method__container {
        text-align: center;
    }

    .payment__container a, #order {
        text-decoration: none;
        color: #000;
        border-radius: 12px;
        margin-top: 20px;
        background-color: white;
        padding: 10px 10px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
    }

    #order {
        border: 1px solid blue;
    }

    .check__out__method__container a {
        text-decoration: none;
        color: #000;
        border-radius: 12px;
        margin-top: 20px;
        background-color: white;
        padding: 30px 32px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
    }

    .active {
        border: 2px solid blue;
    }

</style>