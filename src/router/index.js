import VueRouter from "vue-router";
import MainPage from "@/components/pages/Main-page";
import ProductPage from "@/components/pages/Product-page";
import CartPage from "@/components/pages/Cart-page";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'MainPage',
            path: '/',
            component: MainPage
        },
        {
            name: 'productPage',
            path: '/products',
            component: ProductPage
        },
        {
            name: 'CartPage',
            path: '/cart',
            component: CartPage
        }
    ]
});