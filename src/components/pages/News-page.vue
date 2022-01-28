<template>
  <section>
    <Header/>
    <NewsCard/>
  </section>
</template>

<script>
import Header from "@/components/views/header/Header";
import NewsCard from "../views/news/News-card";
export default {
  name: "NewsPage",
  components:{
    Header,NewsCard
  }
}
</script>

<style scoped>

</style>