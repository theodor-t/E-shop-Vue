<template>
    <div id="main__shop">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'main__shop',
    }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    #main__shop {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #ffffff;
    }
</style>
