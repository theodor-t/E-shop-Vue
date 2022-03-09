<template>
    <section>
        <Header/>
        <ContentBox :color="styleColor"/>

    </section>
</template>

<script>
    import Header from "@/components/views/header/Header";
    import ContentBox from "@/components/views/content_box/Content";

    export default {
        name: "MainPage",
        data: () => ({
            styleColor: String
        }),
        methods: {
            receiveMessage(color) {
                this.styleColor = color;
            }
        },
        components: {
            Header, ContentBox
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

    section {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;
    }

</style>