<template>
  <div class="footer">
    <p><span>&#169;</span> {{ new Date().getFullYear() }} All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 25px;
  background-color: black;
  text-align: center;
  color: white;
}
</style>