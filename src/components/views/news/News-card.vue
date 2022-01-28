<template>
  <section>
    <div class="card-container">
      <section class="news1">
        <div class="text-photo">
          <p class="author">STEVE JOBS</p>
          <p class="headline">IPHONE 13 PRO MAX</p>
          <button class="topic_btn">Apple</button>
        </div>
      </section>
      <section class="text">
        <article class="main-article">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum non ad mollitia iure laudantium alias nostrum blanditiis omnis maxime numquam accusamus quo dolorem doloremque aut voluptates, dolorum. Minima, culpa.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias molestiae nesciunt consequuntur aspernatur! A sequi dolores praesentium, inventore, officiis reiciendis quasi, fugit consectetur facere, placeat ratione dignissimos omnis iure.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae, minus deleniti libero impedit modi aspernatur ex. Necessitatibus esse quia obcaecati in doloremque! Ea, laborum maiores aliquid consectetur dolorem quibusdam.</p>
        </article>
      </section>
    </div>
    <div class="card-container">
      <section class="news2">
        <div class="text-photo">
          <p class="author">Peter Kelly</p>
          <p class="headline">Samsung S21 Ultra</p>
          <button class="topic_btn">Samsung</button>
        </div>
      </section>
      <section class="text">
        <article class="main-article">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet earum non ad mollitia iure laudantium alias nostrum blanditiis omnis maxime numquam accusamus quo dolorem doloremque aut voluptates, dolorum. Minima, culpa.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore molestias molestiae nesciunt consequuntur aspernatur! A sequi dolores praesentium, inventore, officiis reiciendis quasi, fugit consectetur facere, placeat ratione dignissimos omnis iure.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae, minus deleniti libero impedit modi aspernatur ex. Necessitatibus esse quia obcaecati in doloremque! Ea, laborum maiores aliquid consectetur dolorem quibusdam.</p>
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
  background-image: url('https://rozetked.me/images/uploads/webp/MhMVc9UY4DDb.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  z-index: 1;
}
.news2 {
  height: 350px;
  background-image: url('https://itc.ua/wp-content/uploads/2021/02/s21-vs-ultra-1-of-1.jpg');
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
.text-photo{
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
.comments{
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
li{
  font-size: 0.8em;
  list-style: none;
  margin-bottom: 30px;
}

</style>