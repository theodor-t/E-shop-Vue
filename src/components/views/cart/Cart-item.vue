<template>
    <li>
        <div class="cart__item">
            <div class="item__image">
                <img :src="require(`../../../static/img/${item_data.category}/${item_data.imageUrl}`)" alt="">
            </div>
            <div class="item__title">
                <h2>
                    {{item_data.title}}
                </h2>
                <span class="item__color" v-if="item_data.colors">{{item_data.colors}}</span>
                <span class="item__size" v-if="item_data.memoryCapacity"> {{item_data.memoryCapacity}}</span>
            </div>
            <div class="item__quantity">
                <h2>
                    <a @click="incrementQuantity" class="increment__btn">+</a>
                    <span class="item__count">{{item_data.quantity}}</span>
                    <a @click="decrementQuantity" class="decrement__btn">-</a>
                </h2>
            </div>
            <div class="item__price">
                <h2>
                    ${{item_data.price}}
                </h2>
            </div>
            <div class="item__configure">
                <a @click="removeItem" class="remove__btn"><em class="far fa-times-circle"></em></a>
            </div>
        </div>
        <hr>
    </li>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "CartItem",
        props: {
            item_data: {
                type: Object,
                default: () => ({})
            }
        },
        computed: mapGetters(['ALL_PRODUCTS', 'CART']),
        methods: {
            ...mapActions(['GET_ALL_PRODUCTS', 'INCREMENT_CART',
                'DECREMENT_CART', 'CALCULATE_TOTAL_COUNT', 'REMOVE_CART_PRODUCT']),
            decrementQuantity() {
                if (this.$cart.stockCount(
                    this.ALL_PRODUCTS, this.item_data.id, this.item_data.colors, this.item_data.memoryCapacity
                ) > this.item_data.quantity - 1 && this.item_data.quantity - 1 > 0) {
                    this.DECREMENT_CART(this.item_data);
                }
            },
            incrementQuantity() {
                if (this.$cart.stockCount(
                    this.ALL_PRODUCTS, this.item_data.id, this.item_data.colors, this.item_data.memoryCapacity)
                    >= this.item_data.quantity + 1) {
                    this.INCREMENT_CART(this.item_data);
                }
            },
            removeItem() {
                this.REMOVE_CART_PRODUCT(this.item_data);
                this.CALCULATE_TOTAL_COUNT(this.$cart.calculateTotal(this.CART));
            }
        },
        mounted() {
            this.GET_ALL_PRODUCTS();
        },
        watch: {
            'CART': {
                deep: true,
                handler() {
                    this.CALCULATE_TOTAL_COUNT(this.$cart.calculateTotal(this.CART));
                }
            }
        }
    }
</script>

<style scoped>
    .cart__item {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        justify-items: center;
        align-items: center;
    }

    .item__quantity a {
        padding: 10px 10px !important;
    }

    #cart__products .item__title span {
        color: #fff;
        display: block;
    }

    hr {
        border: 1px solid white;
    }

    .item__image {
        grid-area: 1 / 1 / 3 / 2;
    }

    .item__title {
        grid-area: 1 / 2 / 3 / 3;
    }

    .item__quantity {
        grid-area: 1 / 3 / 3 / 4;
    }

    .item__price {
        grid-area: 1 / 4 / 3 / 5;
    }

    .item__configure {
        grid-area: 1 / 5 / 3 / 6;
    }

    .item__quantity a {
        padding: 10px 10px !important;
    }

    .item__count {
        padding: 10px;
    }

    h2 {
        color: #fff;
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 1.5em;
    }

    a {
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

    a:hover {
        cursor: pointer;
    }

    @media (max-width: 845px) {
        .cart__item {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
        }

        .item__image {
            grid-area: 1 / 1 / 2 / 3;
        }

        .item__title {
            grid-area: 2 / 1 / 3 / 3;
        }

        .item__quantity {
            grid-area: 3 / 1 / 4 / 3;
        }

        .item__price {
            grid-area: 4 / 1 / 5 / 3;
        }

        .item__configure {
            grid-area: 5 / 1 / 6 / 3;
        }
    }

</style>