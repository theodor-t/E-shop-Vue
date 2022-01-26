<template>
    <header>
        <a href="/"><img alt="Could not load" class="logo" src="../../../static/img/logo.png"></a>
        <div :class="[isToggled ? 'active': '']" @click="toggleMenu" class="toggle"></div>
        <ul :class="[isToggled ? 'active': '']" @click="toggleMenu" class="navigation">
            <li><a @click="checkCurrentRoute($router, '/')">Home</a></li>
            <li><a @click="checkCurrentRoute($router, '/products')">Products</a></li>
            <li><a @click="checkCurrentRoute($router, '/news')">News</a></li>
            <li><a @click="checkCurrentRoute($router, '/contact')">Contact</a></li>
            <li><a @click="checkCurrentRoute($router, '/cart')"> {{CART_COUNT}}
                <em class="fas fa-shopping-cart fa-lg"></em>
            </a></li>
        </ul>
    </header>
</template>


<script>
    import {checkCurrentRoute} from "@/router/routeCheck";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Header",
        data: () => ({
            isToggled: false,
            checkCurrentRoute
        }),
        computed: mapGetters(['CART_COUNT', 'CART']),
        methods: {
            ...mapActions(['CALCULATE_TOTAL_COUNT']),
            toggleMenu() {
                this.isToggled = !this.isToggled;
            }
        },
        mounted() {
            this.CALCULATE_TOTAL_COUNT(this.$cart.calculateTotal(this.CART));
        }
    }
</script>

<style scoped>
    li{
      cursor: pointer;
    }
    header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 20px 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
    }

    header ul .navigation.active {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-self: center;
        align-items: center;
        flex-direction: column;
        background: #fff;
        z-index: 10;
    }

    header .logo {
        width: 100%;
        position: relative;
    }

    header ul {
        position: relative;
        display: flex;
    }

    header ul li {
        list-style: none;
        color: red;
    }

    header ul li a {
        display: inline-block;
        color: #000000;
        font-weight: 400;
        margin-left: 40px;
        text-decoration: none;
    }

    @media (max-width: 991px) {
        header {
            padding: 20px;
        }

        header .logo {
            width: 200px;
        }

        header ul {
            display: none;
            background-color: red;
        }

        header ul.navigation.active {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-self: center;
            align-items: center;
            flex-direction: column;
            background: #ffffff;
            z-index: 1;
        }

        header ul li a {
            font-size: 1.5em;
            margin: 5px 0;
            justify-content: center;
            text-align: center;
        }

        .toggle.active {
            position: fixed;
            right: 20px;
            background-size: 25px;
            background: url("../../../static/img/close.png") no-repeat center;
        }

        .toggle {
            position: relative;
            width: 30px;
            height: 30px;
            cursor: pointer;
            background-size: 30px;
            background: url("../../../static/img/menu.png") no-repeat center;
            z-index: 10;
        }
    }
</style>