<template>
  <li class="container">
    <div class="card">
      <div class="imgBx">
        <img :src="require(`../../../static/img/${category}/${product_data.imageUrl}`)" alt="can't">
      </div>
      <div class="contentBx">
        <h2>{{ product_data.title }}</h2>
        <div class="size" v-if="product_data.memoryCapacity.length > 0">
          <h3>Capacity:</h3>
          <span :class="{highlight:selectedSizeItem === index}" :key="index"
                :v-if="memory.available"
                @click="selectSize($event, index)"
                v-for="(memory,index) in product_data.memoryCapacity">{{ memory.size }}</span>
        </div>
        <div class="color" v-if="product_data.colors.length > 0">
          <h3>Colors:</h3>
          <span :class="{selectedColor:selectedColorItem === index}" :key="index"
                :style="{background:color.color}"
                :v-if="color.available"
                @click="selectColor(index, color.color)"
                v-for="(color, index) in product_data.colors"/>
        </div>
        <div class="button_slide slide_left" @click="addToCart"><em class="fas fa-cart-plus"></em> {{
            product_data.price
          }} lei
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product_data: {
      type: Object,
      default: () => ({})
    },
    category: String
  },
  data: () => ({
    cartItem: undefined,
    selectedSizeItem: undefined,
    selectedColorItem: undefined,
    imageUrl: undefined
  }),
  methods: {
    addToCart() {
      if (this.category !== 'iphone')
        this.$emit('addToCart', this.cartItem);

      if (this.cartItem.colors && this.cartItem.memoryCapacity)
        this.$emit('addToCart', this.cartItem);

    },
    selectSize(event, index) {

      this.selectedSizeItem = index;
      this.cartItem.memoryCapacity = event.target.innerHTML;
      this.setPrices();
    },
    selectColor(index, color) {
      this.selectedColorItem = index;
      this.cartItem.colors = color;
      this.imageUrl = this.product_data.imageUrl.split("_");
      this.imageUrl = `${this.imageUrl[0]}_${this.imageUrl[1]}_${color}.png`;
      this.cartItem.imageUrl = this.imageUrl;
      this.product_data.imageUrl = this.imageUrl;
    },
    setPrices() {

      this.product_data.memoryCapacity.map(element => {
        if (element.size === this.cartItem.memoryCapacity) {
          this.cartItem.price = element.price;
          this.product_data.price = element.price;
        }
      })
    }
  },
  mounted() {

    this.cartItem = {...this.product_data};
    this.cartItem.memoryCapacity = null;
    this.cartItem.colors = null;
    this.cartItem.quantity = 1;
  }
}
</script>

<style scoped>

.container {
  position: relative;
}

.highlight {
  background: #005b8f !important;

}

.selectedColor {
  border-radius: 20% !important;
}

.container .card {
  position: relative;
  width: 275px;
  height: 450px;
  background: #232323;
  /*  border-radius: 20px;*/
  margin-bottom: 35px;
  overflow: hidden;
}

.container .card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: circle(150px at 80% 20%);
  transition: 0.5s ease-in-out;
}

.container .card:hover:before {
  clip-path: circle(300px at 80% -20%);
}

.container .card:after {
  position: absolute;
  top: 30%;
  left: -20%;
  font-size: 10em;
  font-weight: 800;
  font-style: italic;
  color: rgba(255, 255, 255, 0.04);
}

.container .card .imgBx {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.container .card:hover .imgBx {
  top: 0;
  transform: translateY(0%);
}

.container .card .imgBx img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
  width: 170px;
}

.container .card .contentBx {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
}

.container .card:hover .contentBx {
  height: 210px;
}

.container .card .contentBx h2 {
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
}

.container .card .contentBx .size,
.container .card .contentBx .color {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}

.container .card:hover .contentBx .size {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.container .card:hover .contentBx .color {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.container .card .contentBx .size h3,
.container .card .contentBx .color h3 {
  color: #fff;
  font-weight: 300;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 5px;
}

.container .card .contentBx .size span {
  width: 100%;
  height: 26px;
  text-align: center;
  line-height: 26px;
  font-size: 15px;
  display: inline-block;
  color: #111;
  background: #fff;
  margin: 0 5px;
  transition: 0.5s;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;
}

.container .card .contentBx .size span:hover {
  background: #005b8f;
  z-index: 1;
  color: white;
}

.container.disabled .card {
  border: 3px solid #005b8f;
  color: white;
}

.container.disabled:hover {
  cursor: default;
}

.container:hover {
  cursor: pointer;
}

.container .card .contentBx .color span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  z-index: 1;
}

.container .card .contentBx .color span:hover {
  border-radius: 20%;
  z-index: 1;
}

.container .card .contentBx a {
  position: absolute;
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(-150px);
  transition: 0.5s;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}

.container .card:hover .contentBx a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
  z-index: 100;
}

.button_slide {
  color: #FFF;
  border: 2px solid rgb(0, 91, 143);
  border-radius: 0px;
  padding: 18px 36px;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #005b8f;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;
}

.slide_left:hover {
  box-shadow: inset 0 0 0 50px #005b8f;
}

</style>