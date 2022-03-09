<template>
  <div class="container">
    <h1 class="brand">Contact Us</h1>
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
        <form>
          <p>
            <label for="name" id="name">Name</label>
            <input type="text" name="name">
          </p>
          <p>
            <label for="surname" id="surname">Surname</label>
            <input type="text" name="surname">
          </p>
          <p>
            <label for="phone" id="phone">Phone number</label>
            <input type="text" name="phone">
          </p>
          <p>
            <label for="email" id="email">Email</label>
            <input type="email" name="email">
          </p>
          <p class="full">
            <label for="message" id="message">Message</label>
            <textarea name="message" id="" rows="5"></textarea>
          </p>
          <p class="full">
            <button>Send</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact-card"
}
</script>

<style scoped>
.container{
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  padding: 1em;
}

ul{
  list-style: none;
  padding: 0;
}

.brand{
  text-align: center;
}
.brand span{
  color: #fff;
}

.wrapper{
  box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
}
.wrapper > *{
  padding: 1em;
}
.company-info{
  background: #c9e6ff;
}

.company-info h3, .company-info ul{
  text-align: center;
  margin: 0 0 1rem 0;
}
.contact{
  background: #f9feff;
}

/*Form styles*/
.contact form{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.contact form label{
  display: block;
}

.contact form p{
  margin: 0;
}

.contact form .full{
  grid-column: 1 / 3 ;
}

.contact form button , .contact form input, .contact form textarea{
  width: 100%;
  padding: 1em;
  border: 1px solid #c9e6ff;
}
.contact form button{
  background: #c9e6ff;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
}

.contact form button:hover, .contact form button:focus{
  background: #92bde7;
  color: #fff;
  outline: 0;
  transition: background-color 1s ease-out ;
}

/*Pantallas Grandes*/
@media(min-width:700px){
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .wrapper > *{
    padding: 2em;
  }

  .company-info h3, .company-info ul{
    text-align: left;
  }
}
</style>