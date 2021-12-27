import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
        allProducts: [],
        categories: [],
        discount: JSON.parse(localStorage.getItem('discount')) || null,
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        shipping: JSON.parse(localStorage.getItem('shipping')) || null,
        count: 0
    },
    mutations: { // should modify state
        SET_CATEGORIES: (state, categories) => {
            state.categories = categories;
        },
        SET_PRODUCTS: (state, products) => {
            state.products = products;
        },
        PUSH_CART: (state, product) => {
            state.cart.push(product);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        INCREMENT_CART: (state, product) => {
            state.cart.find(item => item.id === product.id &&
                item.colors === product.colors &&
                item.memoryCapacity === product.memoryCapacity).quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        SET_COUNT: (state) => {
            state.count = state.cart.length;
        },
        SET_ALL_PRODUCTS: (state, allProducts) => {
            state.allProducts = allProducts
        },
        DECREMENT_CART: (state, product) => {
            state.cart.find(cartItem => cartItem.id === product.id &&
                cartItem.colors === product.colors &&
                cartItem.memoryCapacity === product.memoryCapacity).quantity--;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        REMOVE_CART_PRODUCT: (state, product) => {
            state.cart.splice(state.cart.findIndex(
                productToRemove => productToRemove.id === product.id &&
                    productToRemove.colors === product.colors &&
                    productToRemove.memoryCapacity === product.memoryCapacity
            ), 1);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        SET_SHIPPING: (state, shipping) => {
            state.shipping = shipping;
            localStorage.setItem('shipping', JSON.stringify(state.shipping));
        },
        SET_DISCOUNT: (state, discount) => {
            state.discount = discount;
            localStorage.setItem('discount', JSON.stringify(state.discount));
        },
        CLEAR_STORE: (state) => {
            localStorage.clear();
            state.cart = [];
            state.discount = null;
            state.shipping = null;
            state.count = 0;
        }
    },
    actions: {
        async GET_CATEGORIES(ctx) {
            return axios('http://localhost:8080/categories', {
                method: "GET"
            })
                .then((categories) => {
                    ctx.commit('SET_CATEGORIES', categories.data);
                })
                .catch(error => {
                    return error;
                })
        },
        GET_PRODUCTS(ctx, category) {
            ctx.commit('SET_PRODUCTS', []);
            return axios(`http://localhost:8080/products/${category}`, {
                method: "GET"
            })
                .then((products) => {
                    ctx.commit('SET_PRODUCTS', products.data);
                })
                .catch(error => {
                    return error;
                })
        },
        GET_ALL_PRODUCTS(ctx) {
            return axios(`http://localhost:8080/products`, {
                method: "GET"
            })
                .then((products) => {
                    ctx.commit('SET_ALL_PRODUCTS', products.data);
                })
                .catch(error => {
                    return error;
                })
        },
        GET_DISCOUNT(ctx, code) {
            return axios(`http://localhost:8080/discount/${code}`, {
                method: "GET"
            })
                .then((discount) => {
                    if (discount.data.code !== null)
                        ctx.commit('SET_DISCOUNT', discount.data);
                })
                .catch(error => {
                    return error;
                })
        },
        ADD_TO_CART(ctx, product) {
            ctx.commit('PUSH_CART', product)
        },
        INCREMENT_CART(ctx, product) {
            ctx.commit('INCREMENT_CART', product)
        },
        DECREMENT_CART(ctx, product) {
            ctx.commit('DECREMENT_CART', product)
        },
        CALCULATE_TOTAL_COUNT: (ctx, total) => {
            ctx.commit('SET_COUNT', total)
        },
        REMOVE_CART_PRODUCT: (ctx, product) => {
            ctx.commit('REMOVE_CART_PRODUCT', product)
        },
        SET_SHIPPING: (ctx, shipping) => {
            ctx.commit('SET_SHIPPING', shipping)
        },
        CLEAR_STORE: (ctx) => {
            ctx.commit('CLEAR_STORE');
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CATEGORIES(state) {
            return state.categories
        },
        CART(state) {
            return state.cart
        },
        CART_COUNT(state) {
            return state.count;
        },
        ALL_PRODUCTS(state) {
            return state.allProducts
        },
        SHIPPING_PRICE(state) {
            return state.shipping ? state.shipping.value : 0
        },
        DISCOUNT(state) {
            return state.discount
        },
        DISCOUNT_VALUE(state) {
            return state.discount ? state.discount.value : 0
        }
    }
});

export default store;