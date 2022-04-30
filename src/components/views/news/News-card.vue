<template>
  <section>
    <div class="card-container">
      <section class="news1">
        <div class="text-photo">
          <!--          <button class="topic_btn">15.02.2022</button>-->
        </div>
      </section>
      <section class="text">
        <article class="main-article">
          <p>UNLOCK DISCOUNTS ON BLACK FRIDAY!</p>
          <p>Can you already feel the heat for BLACK FRIDAY?
            Every year more and more people choose to wait until this momentous discount period to buy the coolest
            products at the best prices. This year, four days of discounts up to 500 LEI and an impressive list of
            products that are worthy of your attention are waiting for you.
            We offer you to take advantage of super-profitable discounts on top tablets, smartphones, gadgets, TVs,
            peripherals and more! You will have not one, but exactly four days at your disposal! Become a part of BLACK
            FRIDAY with AntiHype! Take your Promo Code, but remember that they are limited. Good Luck!</p>
          <p>Promo-codes: <br>
            Gw29Ulq07 <br>
            EtOo902p1 <br>
            UT78ba281 <br>
            762oWy671</p>
        </article>
      </section>
    </div>
    <div class="card-container">
      <section class="news2">
        <div class="text-photo">
<!--          <p class="author">Peter Kelly</p>
          <p class="headline">Samsung S21 Ultra</p>
          <button class="topic_btn">Samsung</button>-->
        </div>
      </section>
      <section class="text">
        <article class="main-article">
          <p>
            The Easter Holiday brings you SUPER DISCOUNTS on gadgets!
            This time in basket of presents, in addition to chocolate eggs and Easter cakes, you will find laptops,
            smart watches, fitness bracelets, smartphones, wireless headphones, speakers and many other smart devices
            and gadgets.
            Catch the Promo Code and get SUPER DISCOUNTS on gadgets at AntiHype store! Take advantage of the Easter
            promotion and please your family and friends with cool gifts and positive emotions!
            The AntiHype team wishes you a Happy Easter full of light and warmth! Be safe!
          </p>
        </article>
      </section>
    </div>
  </section>

</template>

<script>
export default {
  name: "news-card"
}
</script>

<style scoped>
/* SECTION PHOTO */
.news1 {
  height: 350px;
  background-image: url('../../../static/img/news/news1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 1;
}

.news2 {
  height: 350px;
  background-image: url('../../../static/img/news/news2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 1;
}

/* SECTION PHOTO */


.card-container {
  width: 50%;
  margin: 100px auto 100px auto;
  box-shadow: 0 8px 20px -6px #000;
}

.text-photo {
  z-index: 2;
  position: relative;
  left: 5%;
  top: 50%;
}

.author {
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
}

.headline {
  letter-spacing: 1.2px;
  text-transform: uppercase;
  line-height: 1.5em;
  font-weight: 800;
  font-size: 2.5em;
  margin-right: 20%;
}

.topic_btn {
  margin-top: 10px;
  font-weight: 800;
  color: #000;
  background-color: #fff;
  border-radius: 2px;
  padding: 10px;
  text-transform: uppercase;
  outline: none;
  border: 0;
}

/* SECTION TEXT */
.text {
  padding: 40px 5% 10px 5%;
  height: 100%;
  color: #95A5A6;
  background-color: #F2F1EF;
}

.main-article {
  font-size: 1em;
  text-align: left;
  line-height: 1.5em;
}

.main-article p {
  margin-bottom: 15px;
}

.main-article p:first-child:first-letter {
  float: left;
  color: #4a545e;
  font-size: 5.5em;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}

/* SECTION COMMENTS */
.comments {
  padding: 30px 5% 10px 5%;
  color: #000;
  background-color: #fff;
}

.comments h3 {
  text-transform: uppercase;
  text-align: center;
  font-size: 1em;
  margin-bottom: 30px;
}

li {
  font-size: 0.8em;
  list-style: none;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .card-container {
    width: 80%;
  }
}
</style>