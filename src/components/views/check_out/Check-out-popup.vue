<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <slot name="body">
                            <div class="check__out__window disabled">
                                <div class="check__out__exit">
                                    <a @click="$emit('close')" id="check__out__close"><em
                                            class="far fa-times-circle"></em></a>
                                </div>

                                <div class="check__out__method__container">
                                    <a class="active" id="deliver">Deliver to me</a>
                                </div>
                                <div class="deliver__container">
                                    <span id="error__container">{{errorText}}</span>
                                    <div class="information__container">
                                        <div class="name__container">
                                            <span>Name</span>
                                            <label for="name">
                                                <input id="name" class="input_width" pattern="[a-zA-Z]*" type="text" v-model="name">
                                            </label>
                                        </div>
                                        <div class="surname__container">
                                            <span>Surname</span>
                                            <label for="surname">
                                                <input id="surname" class="input_width" pattern="[a-zA-Z]*" type="text" v-model="surname">
                                            </label>
                                        </div>
                                        <div class="address__container">
                                            <span>Address</span>
                                            <label for="address">
                                                <input id="address" class="input__address_width"  type="text" v-model="address">
                                            </label>
                                        </div>
                                        <div class="city__container">
                                            <span>City</span>
                                            <label for="city">
                                                <input id="city" class="input_width" type="text" v-model="city">
                                            </label>
                                        </div>

                                        <div class="country__container">
                                            <span>Country</span>
                                            <label for="country">
                                                <input id="country" class="input_width" type="text" v-model="country">
                                            </label>
                                        </div>

                                        <div class="phone__container">
                                            <span>Phone</span>
                                            <label for="phone">
                                                <input id="phone" class="input_width" type="text" v-model="phone">
                                            </label>
                                        </div>

                                        <div class="payment__container">
                                            <span>Payment Method</span>
                                            <a :class="{highlight:selectedPayment === 1}"
                                               @click="setPaymentMethod('Credit', 1)">Credit</a>
                                            <a :class="{highlight:selectedPayment === 2}"
                                               @click="setPaymentMethod('Cash', 2)">Cash</a>
                                            <a :class="{highlight:selectedPayment === 3}"
                                               @click="setPaymentMethod('Card', 3)">Card</a>
                                        </div>
                                    </div>
                                    <a @click="orderItems" id="order">Order</a>
                                </div>
                            </div>
                        </slot>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import axios from 'axios'

    export default {
        name: "Check-out-popup",
        data: () => ({
            errorText: '',
            address: '',
            phone: '',
            name: '',
            surname: '',
            city: '',
            country: '',
            paymentMethod: "Cash",
            selectedPayment: 0
        }),
        computed: mapGetters(['CART', 'DISCOUNT', 'SHIPPING_PRICE', 'DISCOUNT_VALUE']),
        methods: {
            ...mapActions(['CLEAR_STORE']),
            orderItems() {
                if (this.name && this.surname && this.city && this.country && this.errorText === '') {
                    const userInfo = {
                        "name": this.name,
                        "surname": this.surname,
                        "address": this.address,
                        "phone": this.phone,
                        "city": this.city,
                        "country": this.country
                    };

                    this.$emit('close');
                    this.sendData(userInfo);
                }
            },
            setPaymentMethod(value, index) {
                this.paymentMethod = value;
                this.selectedPayment = index;
            },
            async sendData(userInfo) {
                const order = {
                    "products": this.CART,
                    "contact": userInfo,
                    "shippingPrice": this.SHIPPING_PRICE,
                    "discount": this.DISCOUNT,
                    "totalPrice": this.$cart.calculateTotal(this.CART) - this.DISCOUNT_VALUE,
                    "paymentMethod": this.paymentMethod
                };

                console.log(this.DISCOUNT);
                if (this.DISCOUNT.used === false) await this.deactivateDiscount(this.DISCOUNT.id);
                await this.sendOrderToAPI(order);
                this.CLEAR_STORE();
            },
          deactivateDiscount(id) {
                return new Promise((resolve => {
                    this.DEACTIVATE(`http://localhost:8080/deactivate/${id}`)
                        .then(response => {
                            resolve(response.data)
                        }).catch();
                }))
            },
            DEACTIVATE(url) {
                try {
                    return axios.get(url)
                } catch (e) {
                    return e;
                }
            },
            POST(url, data) {
                try {
                    return axios.post(url, data);
                } catch (e) {
                    return e;
                }
            },
            sendOrderToAPI(order) {

                return new Promise((resolve => {
                  console.log(order);
                    this.POST(`http://localhost:8080/orders/`, order)
                        .then(response => {
                            resolve(response.data)
                        }).catch();
                }))
            }
        },
        watch: {
            phone() {
                const phoneRegexp = /^[+373|373]*[0]*[0-9]{7,8}$/;

                if (!(new RegExp(phoneRegexp).test(this.phone))) {
                    this.errorText = "Wrong phone";
                    return;
                }
                this.errorText = '';
            },
            address() {
                const addressRegexp = /^[a-zA-Z0-9\s,'-]{4,}$/;

                if (!(new RegExp(addressRegexp).test(this.address) && (this.address.length < 20))) {
                    this.errorText = "Wrong address";
                    return;
                }
                this.errorText = '';
            },
            name() {
                this.name = this.name.replace(/[^a-zA-Z]/g, '');
            },
            surname() {
                this.surname = this.surname.replace(/[^a-zA-Z]/g, '');
            },
            city() {
                this.city = this.city.replace(/[^a-zA-Z]/g, '');
            },
            country() {
                this.country = this.country.replace(/[^a-zA-Z]/g, '');
            }
        }
    }
</script>

<style scoped>
.input__address_width{
  width: 95%;
  padding: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.input_width{
  width: 90%;
  padding: 18px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}


#deliver{
  background-color: #b2b2b2;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.modal-wrapper{
  min-height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}

    .highlight {
        border: 1px solid blue !important;;
    }

    .deliver__container {
        text-align: left;
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
        top: 25%;
        margin: auto;
        z-index: 100000;
    }

    .check__out__address__container span {
        display: block;
    }

    .check__out__exit svg {
        float: right;
        font-size: 25px;
    }

/*    .address__container input {
        width: 200px;
        flex-direction: row;
        padding: 0.5rem 0.5rem 0.5rem;
    }*/

    /*
    .information__container input {
        background: transparent;
        outline: none;
        border: 1px solid black;
        border-radius: 35px;
        padding: .5rem .5rem .3rem .3rem;
    }
    */

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
        cursor: pointer;
    }


    .check__out__method__container {
        text-align: center;
    }

    .payment__container a, #order {
      background-color: #c5c5c5;
      border: none;
      color: white;
      color: black;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }

    #order {
      /*  border: 1px solid blue;*/
      cursor: pointer;
      background-color: #555555;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;

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