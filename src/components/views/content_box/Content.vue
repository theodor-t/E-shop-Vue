<template>
  <section class="wrapper">
    <div class="box header">
      <header class="header__top">
        <ul class="social_site">
          <li class="social_link"><a href="https://vk.com/erlax_official" target="_blank"><i class="fab fa-vk fa-2x link__vk"></i></a></li>
          <li class="social_link"><a href="https://www.facebook.com/erlax.official" target="_blank"><i class="fab fa-instagram fa-2x link__inst"></i></a></li>
          <li class="social_link"><a href="https://instagram.com/theodor_t19" target="_blank"><i class="fab fa-facebook-f fa-2x link__fb"></i></a></li>
          <li class="social_link"><a href="https://github.com/theodorerlax" target="_blank"><i class="fab fa-telegram-plane fa-2x link__git"></i></a></li>
        </ul>
        <div class="ScrollDown">

          <div class="ScrollDown_box">
            <a class="btn_ScrollDown" href="#welcome" v-smooth-scroll>
              <span></span><span></span><span></span>Scroll Down</a>
          </div>

        </div>
      </header>
    </div>
    <section id="welcome">

      <About/>
      </section>
  </section>

</template>

<script>
import About from "@/components/views/about/About";
export default {
  name: "ContentBox",
  data: () => ({


  }),
  props: {


  },
  components: {
    About
  },
  watch: {

  },
  mounted() {

  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr ;
  grid-template-areas: "header  header  header";
  background-color: #fff;
  color: #444;
}

.box {
  font-size: 150%;
}
.header {
  grid-area: header;
}
.header__top {
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: cadetblue;
  background-image: url("../../../static/img/bg.jpg");
  background-size: cover;
  background-position: center;
}
.social_site {
  list-style-type: none;
  margin-top: 12%;
  margin-left: 2%;
  display: none;
}
@media (max-width: 768px) {
  .social_site {
    display: none;
  }
  .header__top{
    background-image: url("../../../static/img/bg_mob.jpg");
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .social_site {
    display: none;
  }
}
.social_link:hover {
  transform: scale(1.2);
  /* Увеличиваем масштаб */
}

.social_link {
  background-color: #e4e4e5;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  margin-top: 10px;
  transition: 0.4s;
}

.social_site a {
  text-decoration: none;
}

.link__vk {
  margin-left: 5px;
  margin-top: 13px;
  color: rgb(14, 88, 184);
}

.link__inst {
  margin-left: 14px;
  margin-top: 12px;
  color: rgb(14, 88, 184);
}

.link__fb {
  margin-left: 19px;
  margin-top: 12px;
  color: rgb(14, 88, 184);
}

.link__git {
  margin-left: 12px;
  margin-top: 11px;
  color: rgb(14, 88, 184);
}
.social_site a {
  text-decoration: none;
}

.ScrollDown {
  width: 100%;
  height: 100vh;
  text-align: center;
}

.ScrollDown_box {
  position: absolute;
  left: 50%;
  bottom: 50%;
  margin-left: -50px;
  top: 81%;
}

a.btn_ScrollDown {
  display: block;
  padding-top: 84px;
  width: 100px;
  height: 10px;
  margin: 0 auto;
  position: relative;
  color: #000000;
  text-decoration: none;
  font-size: 15px;
}

a.btn_ScrollDown span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-left: -15px;
  border-left: 4px solid #000000;
  border-bottom: 4px solid #000000;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 1.5s infinite;
  animation: sdb 1.5s infinite;
  box-sizing: border-box;
}

a.btn_ScrollDown span:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}

a.btn_ScrollDown span:nth-of-type(2) {
  top: 16px;
  -webkit-animation-delay: .15s;
  animation-delay: .15s;
}

a.btn_ScrollDown span:nth-of-type(3) {
  top: 32px;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}

@-webkit-keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


</style>