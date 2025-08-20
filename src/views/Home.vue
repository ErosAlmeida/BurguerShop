<template>
  <div class="home">
    <Banner/>
    <div class="main-container">
      <h1>Monte seu burguer</h1>
      <BurgerForm/>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgerForm from '../components/BurguerForm.vue' // ← Mudei para BurguerForm.vue

export default {
  name: "Home",
  components: {
    Banner,
    BurgerForm
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #222;
  margin-bottom: 30px;
  font-size: 2.5rem;
}
</style>