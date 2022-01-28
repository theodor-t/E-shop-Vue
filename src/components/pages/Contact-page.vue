<template>
  <section>
    <Header/>
    <ContactCard/>
  </section>
</template>

<script>
import Header from "@/components/views/header/Header";
import ContactCard from "@/components/views/contact/Contact-card";
export default {
  name: "ContactPage",
  components:{
    Header,ContactCard
  }
}
</script>

<style scoped>

</style>