<template>
  <div class="container">
    <h1 class="heading_text">Contact Us</h1>
    <hr class="hr_line">
    <div class="wrapper">
      <div class="company-info">
        <h3>Contacts</h3>
        <ul>
          <li>Balti, Bulgara 80/2</li>
          <li>(+373) 60-950-924</li>
          <li>official.antihype@gmail.com</li>
        </ul>
      </div>
      <div class="contact">
        <h3>Please, complete this form</h3>
        <form ref="form" @submit.prevent="sendEmail">
          <p>
            <label>Full Name</label>
            <input type="text" name="user_name" required>
          </p>
          <p>
            <label>Email</label>
            <input type="email" name="user_email" required>
          </p>
          <p class="full">
            <label for="message" id="message">Message</label>
            <textarea name="message" id="" rows="5" required></textarea>
          </p>
          <p class="full">
            <button type="submit" value="Send">Send</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import emailjs from '@emailjs/browser';

export default {
  name: "Contact-card",
  methods: {
    sendEmail() {
      emailjs.sendForm('service_rhz9a7w', 'template_gobnvmj', this.$refs.form, 'bSCooxdPK1JoDb3WY')
          .then((result) => {
            this.$fire({
              title: "Successfully!",
              text: "\n" +
                  "Your message has been sent successfully, expect a response within 5 business days.",
              type: "success",
              timer: 3000
            }).then(r => {
              console.log(r.value);
              console.log(result.text)
            });
          }, (error) => {
            this.$fire({
              title: "Error!",
              text: "Check the data is correct and try again.",
              type: "error",
              timer: 3000
            }).then(r => {
              console.log(r.value);
              console.log(error.text)
            });
          });
    }
  }
}
</script>

<style scoped>

.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  padding: 1em;
}

ul {
  list-style: none;
  padding: 0;
}

.heading_text {
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  color: black;
  font-weight: lighter;
}

.hr_line {
  width: 35%;
  margin: 0 auto;
}

.brand span {
  color: #fff;
}

.wrapper {
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
  margin-top: 15px;
}

.wrapper > * {
  padding: 1em;
}

.company-info {
  background: #c9e6ff;
}

.company-info h3, .company-info ul {
  text-align: center;
  margin: 0 0 1rem 0;
}

.contact {
  background: #f9feff;
}

/*Form styles*/
.contact form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.contact form label {
  display: block;
}

.contact form p {
  margin: 0;
}

.contact form .full {
  grid-column: 1 / 3;
}

.contact form button, .contact form input, .contact form textarea {
  width: 100%;
  padding: 1em;
  border: 1px solid #c9e6ff;
}

.contact form button {
  background: #c9e6ff;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
}

.contact form button:hover, .contact form button:focus {
  background: #92bde7;
  color: #fff;
  outline: 0;
  transition: background-color 1s ease-out;
}

/*Pantallas Grandes*/
@media (min-width: 700px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .wrapper > * {
    padding: 2em;
  }

  .company-info h3, .company-info ul {
    text-align: left;
  }
}
</style>