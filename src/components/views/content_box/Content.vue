<template>
    <section>
        <div :style="{backgroundColor: styleColor}" class="circle"></div>
        <div class="content">
            <div class="textBox">
                <h2>
                    It's not just Store <br> It's <span :style="{color: styleColor}">iPhones</span>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis egestas laoreet tellus eget fermentum. Donec a ipsum id mi suscipit vulputate id quis eros.
                    Nullam auctor nisi ut ante vehicula hendrerit. Pellentesque porttitor ac ligula quis vulputate.
                    Nam lobortis urna a purus accumsan, id tempus lectus rutrum. Maecenas tincidunt ultrices semper.
                    A cursus tortor odio quis sem. Nam non laoreet lacus. Mauris nisl enim, mollis nec tortor at,
                    dictum fringilla nulla.
                    Donec lacinia pretium varius. Nunc fringilla purus vitae libero dictum fringilla.</p>
                <a :style="{background: styleColor}" class="buyNow" href="">Buy Now!</a>
            </div>
            <div class="imgBox">
                <img alt="Could not load" class="iphone"
                     v-bind:src="require('../../../static/img/iphone/' + currentImage)">
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "ContentBox",
        data: () => ({
            currentImage: 'iph11_gold.png',
            styleColor: '#e8b923',
            imageSource: {
                "#e8b923": 'iph11_gold.png', // gold color
                "gray": 'iph11_gray.png',
                "purple": 'iph12_purple.png'
            }
        }),
        props: {
            color: null
        },
        watch: {
            color() {
                this.styleColor = this.color;
                this.currentImage = this.imageSource[this.color];
            }
        }
    }
</script>

<style scoped>
    section {
        padding: 40px;
    }

    .content {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content .textBox {
        position: relative;
        max-width: 600px;
    }

    .content .textBox h2 {
        color: #fff;
        font-size: 4em;
        line-height: 1.4em;
        font-weight: 500;
    }

    .content .textBox h2 span {
        color: #fedfc6;
        font-size: 1.2em;
        font-weight: 900;
    }

    .content .textBox p {
        color: #fff;
    }

    .content .textBox a {
        display: inline-block;
        margin-top: 20px;
        padding: 8px 20px;
        background: #fedfc6;
        color: #fff;
        border-radius: 40px;
        font-weight: 500;
        letter-spacing: 1px;
        text-decoration: none;
    }

    .circle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fedfc6;
        clip-path: circle(600px at right 800px);
    }

    .content .imgBox {
        width: 600px;
        display: flex;
        justify-content: flex-end;
        padding-right: 50px;
        margin-top: 50px;
    }

    .content .imgBox img {
        max-width: 440px;
    }

    @media (max-width: 991px) {
        section {
            padding: 20px 20px 120px;
        }

        .content {
            flex-direction: column;
            margin-top: 100px;
        }

        .content .textBox h2 {
            font-size: 2.5em;
            margin-bottom: 15px;
        }

        .content .textBox {
            max-width: 100%;
        }

        section .circle {
            clip-path: circle(400px at center bottom);
        }

        .content .imgBox {
            max-width: 100%;
            justify-content: center;
        }

        .content .imgBox img {
            max-width: 300px;
        }

        .thumb li img {
            max-width: 40px;
        }

    }
</style>