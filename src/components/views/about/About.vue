<template>
  <section>
    <div>
      <h1 class="heading_text">About Us</h1>
      <p class="description">There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
        over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
        reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
        non-characteristic words etc.</p>
      <hr class="hr_line">
    </div>
    <div class="container">
      <div class="card">
        <div class="circle">
          <h2>01</h2>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum ad id officia reiciendis fugiat sapiente
            autem nobis soluta sint! Sit quidem quos exercitationem dignissimos.
          </p>
          <a href="#">Read More...</a>
        </div>
      </div>

      <div class="card">
        <div class="circle">
          <h2>02</h2>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum ad id officia reiciendis fugiat sapiente
            autem nobis soluta sint! Sit quidem quos exercitationem dignissimos.
          </p>
          <a href="#">Read More...</a>
        </div>
      </div>

      <div class="card">
        <div class="circle">
          <h2>03</h2>
        </div>
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum ad id officia reiciendis fugiat sapiente
            autem nobis soluta sint! Sit quidem quos exercitationem dignissimos.
          </p>
          <a href="#">Read More...</a>
        </div>
      </div>
    </div>

  </section>


</template>

<script>
export default {
  name: "About"
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
.heading_text {
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  color: black;
  font-weight: lighter;
}

.description {
  margin-left: 18%;
  margin-right: 18%;
  text-align: center;
  margin-bottom: 25px;
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