<template>
    <div class="total__price__container">
        <CheckOutPopUp @close="showPopup = false" v-if="showPopup"/>
        <div class="subtotal"><span>Subtotal</span></div>
        <div class="total__price"><span>$ {{subTotalPrice}}</span></div>
        <div class="shipping">
            <div @click="toggledShipping = !toggledShipping" id="toggle__shipping__container">
                <em class="fas fa-info-circle" id="show__shipping"></em>
                <span>Shipping</span>
            </div>

            <ul :class="[toggledShipping ? '' : 'disabled']" class="shipping__companies">
                <li @click="setShipping(0, $event)">Free (5 - 10 working days)</li>
                <li @click="setShipping(9.99, $event)">Novaya Poshta (2 - 5 working days)</li>
                <li @click="setShipping(14.99, $event)">DHL (1 working day)</li>
            </ul>
        </div>
        <div class="shipping__price"><span>$ {{SHIPPING_PRICE}}</span></div>
        <div class="total"><span>Total</span></div>
        <div class="check__out__total">
            <div @click="toggledDiscount = !toggledDiscount">
                <em :class="[DISCOUNT ? 'disabled' : '']" class="fas fa-info-circle" id="show__discount"
                    title="Having a discount nigga?"></em>
                <span>${{totalPrice}}</span>
            </div>

            <div :class="[toggledDiscount ? '' : 'disabled', DISCOUNT ? 'disabled' : '' ]" class="input__container">
                <div class="style__input">
                    <label for="discount__holder"></label>
                    <input id="discount__holder" placeholder="Discount Code?" type="text" v-model="discountCode">
                    <button @click="setDiscount" id="discount__btn" type="submit">
                        <em class="fas fa-arrow-right"></em>
                    </button>
                </div>
            </div>
        </div>
        <div @click="showPopup = true" class="check__out__container"><a>Check Out</a></div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import CheckOutPopUp from "@/components/views/check_out/Check-out-popup"
    import axios from 'axios';

    export default {
        name: "Total-price",
        data: () => ({
            toggledShipping: false,
            toggledDiscount: false,
            discountCode: '',
            showPopup: false
        }),
        methods: {
            ...mapActions(['SET_SHIPPING', 'GET_DISCOUNT']),
            setShipping(value, event) {
                const shippingObject = {
                    text: event.target.innerHTML,
                    value: value
                };
                this.SET_SHIPPING(shippingObject);
            },
            async setDiscount() {
                if (this.discountCode.length === 12) return;

                await this.GET_DISCOUNT(this.discountCode);
                this.discountCode = (this.DISCOUNT ? this.DISCOUNT.value : 0);
                if (!this.DISCOUNT) this.discountCode = '';

                else {
                    this.toggledDiscount = true;
                }
                await this.deleteDiscount(this.DISCOUNT.code); // -> to remove on popup not now.
            },
            DELETE(url) {
                try {
                    return axios.delete(url);
                } catch (e) {
                    return e;
                }
            },
            deleteDiscount(id) {
                return new Promise((resolve => {
                    this.DELETE(`http://localhost:8080/discount/${id}`)
                        .then(response => {
                            resolve(response.data)
                        }).catch();
                }))
            }
        },
        computed: {
            ...mapGetters(['SHIPPING_PRICE', 'CART', 'DISCOUNT', 'DISCOUNT_VALUE']),
            totalPrice() {
                return this.CART.reduce((accumulator, value) => accumulator + value.quantity * value.price, 0)
                    + this.SHIPPING_PRICE - this.DISCOUNT_VALUE;
            },
            subTotalPrice() {
                return this.CART.reduce((accumulator, value) => accumulator + value.quantity * value.price, 0)
            }
        },
        components: {
            CheckOutPopUp
        }
    }
</script>

<style scoped>
    .check__out__container a {
        text-decoration: none;
        color: #000;
        border-radius: 12px;
        margin-top: 20px;
        background-color: yellow;
        border: none;
        padding: 15px 32px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
    }

    .total__price__container em:hover {
        cursor: pointer;
    }

    .toggle__shipping__container em {
        margin-right: 15px;
        font-size: 30px;
    }

    .shipping__companies {
        display: grid;
        grid-template-columns: repeat(auto-fit, 1fr);
        grid-template-rows: repeat(auto-fit, 1fr);
        grid-row-gap: 10px;
        list-style: none;
        color: #fff;
    }

    .disabled {
        display: none;
    }

    .shipping__companies.disabled {
        display: none;
    }

    .shipping__companies li:hover {
        cursor: pointer;
    }

    .total__price__container {
        margin-top: 5%;
        text-align: right;
        display: grid;
        grid-template-columns: repeat(auto-fit, 1fr);
        grid-template-rows: repeat(auto-fit, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 20px;
    }

    .total__price__container span {
        font-size: 1.5em;
        letter-spacing: 2px;
        color: #fff;
        font-weight: bold;
    }

    .subtotal {
        grid-area: 1 / 1 / 2 / 2;
    }

    .total__price {
        grid-area: 1 / 2 / 2 / 3;
    }

    .shipping {
        grid-area: 2 / 1 / 3 / 2;
    }

    .shipping__price {
        grid-area: 2 / 2 / 3 / 3;
    }

    .total {
        grid-area: 3 / 1 / 4 / 2;
    }

    svg {
        filter: invert(1);
        margin-right: 15px;
        font-size: 20px;
    }

    .total__price__container em:hover {
        cursor: pointer;
    }

    .check__out__total {
        grid-area: 3 / 2 / 4 / 3;
    }

    .check__out__container {
        letter-spacing: 3px;
        grid-area: 4 / 2 / 5 / 3;
        cursor: pointer;
    }

    @-webkit-keyframes gradient {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 100% 0;
        }
    }

    @keyframes gradient {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 100% 0;
        }
    }

    .input__container input {
        border-style: none;
        background: transparent;
        outline: none;
    }

    .input__container button {
        padding: 0;
        background: none;
        border: none;
        outline: none;
    }

    .input__container .style__input {
        position: relative;
        display: flex;
        width: 300px;
        float: right;
        flex-direction: row;
        border-radius: 50px;
        padding: 0.5rem 0.5rem 0.5rem;
    }

    .input__container .style__input:after {
        content: "";
        position: absolute;
        left: 5px;
        right: 5px;
        bottom: 0;
        z-index: 999;
        height: 2px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        background-position: 0% 0%;
        background: linear-gradient(to right, #ffa600, #57E6E6, #d60a03, #57E6E6, #B294FF, #d6bb03);
        background-size: 500% auto;
        -webkit-animation: gradient 3s linear infinite;
        animation: gradient 3s linear infinite;
    }

    .input__container .style__input input {
        flex-grow: 1;
        color: #BFD2FF;
        font-size: 20px;
        line-height: 20px;
        vertical-align: middle;
    }

    .input__container .style__input input::-webkit-input-placeholder {
        color: #7881A1;
    }

    .input__container .style__input button {
        color: #7881A1;
        font-size: 20px;
        line-height: 20px;
        vertical-align: middle;
        transition: color 0.25s;
    }

    .input__container .style__input button:hover {
        color: #BFD2FF;
    }

</style>