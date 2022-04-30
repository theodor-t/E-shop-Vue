<template>
  <section>
    <div>
      <h1 class="heading_text">About Us</h1>
      <hr class="hr_line">
      <p class="description">AntiHype - is the best spot for you to buy electronics of different brands. Starting from
        laptops and tablest to variety of mobile phones and cases for them. It's so easy that u can find your favourite
        product in like a few minutes. Make sure to join our community and follow us in our journey to future. We sell,
        we pack and also we deliever it right to you - just make simple staps and it's yours. Be with us and we be there
        for you.</p>
    </div>
    <div class="container">
      <div class="card">
        <div class="circle">
          <h2>01</h2>
        </div>
        <div class="content">
          <p>
            We have already sold hundreds of devices, and it's already grows more every day! You can find all our
            products on the link below.
          </p>
          <a href="/products">Go to products</a>
        </div>
      </div>

      <div class="card">
        <div class="circle">
          <h2>02</h2>
        </div>
        <div class="content">
          <p>
            Our number of visitors on site is more than 1000+ each 24 hours. Graphics don't lie! If you want to know
            more news about us, you can follow the link below.
          </p>
          <a href="/news">Go to news</a>
        </div>
      </div>

      <div class="card">
        <div class="circle">
          <h2>03</h2>
        </div>
        <div class="content">
          <p>
            More than 62% of our buyers are coming back to us satisfied. We are happy when you are happy! Do you want a
            promo code? Write to us!
          </p>
          <a href="/contact">Go to contacts</a>
        </div>
      </div>
    </div>
    <div>
      <h1 class="heading_text">Reviews</h1>
      <hr class="hr_line">
    </div>
    <div class="container">
      <figure class="snip1574">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="profile-sample2"/>
        <figcaption>
          <blockquote>
            <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
          </blockquote>
          <h3>Sue Shei</h3>
          <h5>Founder</h5>
        </figcaption>
      </figure>
      <figure class="snip1574"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg"
                                    alt="profile-sample7"/>
        <figcaption>
          <blockquote>
            <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
          </blockquote>
          <h3>Will Barrow</h3>
          <h5>Web Designer</h5>
        </figcaption>
      </figure>
      <figure class="snip1574"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg"
                                    alt="profile-sample6"/>
        <figcaption>
          <blockquote>
            <p>The only skills I have the patience to learn are those that have no real application in life. </p>
          </blockquote>
          <h3>Indigo Violet</h3>
          <h5>Public Relations</h5>
        </figcaption>
      </figure>
    </div>
    <Footer/>
  </section>


</template>

<script>
import Footer from "@/components/views/footer/Footer";

export default {
  name: "About",
  components: {
    Footer
  }
}
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #D1D1D1;
  background-attachment: fixed;
}

.snip1574 {
  font-family: 'Lato', Arial, sans-serif;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 10px;
  min-width: 250px;
  max-width: 310px;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.snip1574 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.snip1574 img {
  max-width: 100%;
  vertical-align: top;
  opacity: 0.7;
}

.snip1574 figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px 10% 15%;
}

.snip1574 figcaption:before {
  font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 170px;
  opacity: 0.35;
  font-style: normal;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 0px;
  left: 50%;
}

.snip1574 blockquote {
  padding: 0;
  margin: 0;
  font-style: italic;
  font-size: 1.2em;
}

.snip1574 h3 {
  font-family: 'Oswald';
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 3px 0;
}

.snip1574 h5 {
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  color: #bbb;
  letter-spacing: 1px;
}

.heading_text {
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  color: black;
  font-weight: lighter;
}

.description {
  margin-top: 15px;
  margin-left: 18%;
  margin-right: 18%;
  text-align: center;
  margin-bottom: 5px;
}

.hr_line {
  width: 35%;
  margin: 0 auto;
}


.container {
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
}

.container .card {
  position: relative;
  width: 300px;
  height: 420px;
  background: white;
  margin: 30px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transition: all 300ms ease-in-out;
}

.container:hover .card {
  filter: blur(20px);
  transform: scale(0.9);
  opacity: 0.5;
}

.container .card:hover {
  filter: blur(0px);
  transform: scale(1.1);
  opacity: 1;
}

.container .card .circle {
  position: relative;
  width: 100%;
  height: 100%;
  background: black;
  clip-path: circle(180px at center 0);
  text-align: center;
}

.container .card .circle h2 {
  color: white;
  font-size: 4.5em;
  padding: 30px 0;
}

.container .card .content {
  position: absolute;
  bottom: 10px;
  padding: 20px;
  text-align: center;
}

.container .card .content p {
  color: #666666;
}

.container .card .content a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background: black;
  color: white;
  border-radius: 40px;
  text-decoration: none;
  margin-top: 20px;
}

.container .card:nth-child(1) .circle,
.container .card:nth-child(1) .content a {
  background: steelblue;
  color: black;
}

.container .card:nth-child(1) h2 {
  color: black;
}

.container .card:nth-child(2) .circle,
.container .card:nth-child(2) .content a {
  background: #49c1e1;
  color: black;
}

.container .card:nth-child(2) h2 {
  color: black;
}


.container .card:nth-child(3) .circle,
.container .card:nth-child(3) .content a {
  background: #cc3366;
  color: black;
}

.container .card:nth-child(3) h2 {
  color: black;
}
</style>