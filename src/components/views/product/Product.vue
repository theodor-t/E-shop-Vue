<template>
    <section>
        <ul id="products">
            <ProductItem
                    :category="category"
                    :key="product.id"
                    :product_data="product"
                    @addToCart="showResult"
                    v-for="product in products"/>
        </ul>
    </section>
</template>

<script>
    import ProductItem from "@/components/views/product/Product-item";
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Product",
        data: () => ({
            price: null,
            color: null,
            capacity: null
        }),
        props: {
            products: Array,
            category: String
        },
        computed: mapGetters(['CART', 'PRODUCTS']),
        methods: {
            ...mapActions(['ADD_TO_CART', 'INCREMENT_CART', 'CALCULATE_TOTAL_COUNT']),
            showResult(product) {
                const currentProduct = {...product};

                const validItem = this.$cart.inCart(this.CART, currentProduct) &&
                    this.$cart.checkQuantity(currentProduct, this.CART, this.PRODUCTS);

                const canIncreaseCount = validItem || !this.$cart.inCart(this.CART, currentProduct);

                if (validItem)
                    this.INCREMENT_CART(currentProduct);

                if (!this.$cart.inCart(this.CART, currentProduct)) this.ADD_TO_CART(currentProduct);

                if (canIncreaseCount) this.CALCULATE_TOTAL_COUNT(this.$cart.calculateTotal(this.CART));

            },

        },
        components: {
            ProductItem
        }
    }
</script>

<style scoped>
    #products {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 50px;
        list-style: none;
        justify-items: center;
        align-items: center;
    }

    section {
        margin-top: 25%;
    }

    @media (max-width: 1180px) {
        #products {
            grid-template-columns: repeat(3, 1fr);
        }

        section {
            margin-top: 25%;
        }
    }

    @media (max-width: 880px) {
        #products {
            grid-template-columns: repeat(2, 1fr);
        }

        section {
            margin-top: 40%;
        }
    }

    @media (max-width: 670px) {
        #products {
            grid-template-columns: repeat(1, 1fr);
        }

        section {
            margin-top: 80%;
        }
    }
</style>