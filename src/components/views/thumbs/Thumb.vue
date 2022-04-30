<template>
  <div>
    <ul class="thumb">
      <li @click="changeStyle"><img alt="Could not load" src="../../../static/img/iphone/iph11_mini_gold.png">
      </li>
      <li @click="changeStyle"><img alt="Could not load" src="../../../static/img/iphone/iph11_mini_gray.png">
      </li>
      <li @click="changeStyle"><img alt="Could not load" src="../../../static/img/iphone/iph12_mini_purple.png">
      </li>
    </ul>
    <ul class="sci">
      <li><a href="#"><img alt="Couldn't load" src="../../../static/img/social/facebook.png"></a></li>
      <li><a href="#"><img alt="Couldn't load" src="../../../static/img/social/twitter.png"></a></li>
      <li><a href="#"><img alt="Couldn't load" src="../../../static/img/social/instagram.png"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Thumb",
  methods: {
    changeStyle(event) {
      this.styleColor = (event.target.src.split('_')[2].split('.')[0] === 'gold') ? "#e8b923"
          : event.target.src.split('_')[2].split('.')[0];
      this.sendChangesToParent();
    },
    sendChangesToParent() {
      this.$emit("messageFromChild", this.styleColor);
    }
  }
}
</script>

<style scoped>
.thumb {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
}

.thumb li {
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.5s;
}

.thumb li:hover {
  transform: translateY(-15px);
}

.thumb li img {
  max-width: 60px;
}

.sci {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sci li {
  list-style: none;
}

.sci li a {
  display: inline-block;
  margin: 5px 0;
  transform: scale(0.5);
  filter: invert(1);
}
</style>