<template>
    <section>
        <Header/>
        <Dropdown :categories="this.CATEGORIES" @changedCategory="getCurrentCategory"/>
        <Product :category="currentCategory" :products="this.PRODUCTS" :v-if="this.PRODUCTS" v-if="currentCategory"/>
    </section>

</template>

<script>
    import Header from "@/components/views/header/Header";
    import Dropdown from "@/components/views/category_drop_down/Dropdown";
    import Product from "@/components/views/product/Product";
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "ProductPage",
        data: () => ({
            currentCategory: null
        }),
        components: {
            Header, Dropdown, Product
        },
        computed: mapGetters(['PRODUCTS', 'CATEGORIES']),
        methods: {
            ...mapActions(['GET_PRODUCTS', 'GET_CATEGORIES']),
            async getCurrentCategory(currentCategory) {
                this.currentCategory = currentCategory.toLowerCase();
                await this.GET_PRODUCTS(this.currentCategory);
            }
        },
        async mounted() {
            await this.GET_CATEGORIES();
            this.currentCategory = "iphone";
            await this.GET_PRODUCTS(this.currentCategory);
        }
    }
</script>

<style scoped>

</style>