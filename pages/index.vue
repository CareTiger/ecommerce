<template>
  <section>

    <article  class="mw5 ba pa3 ma3 dib" v-for="product in storedata" :key="product.id">
      <img :src="`/products/${product.img}`" alt="">
      <h1>{{ product.name }}</h1>
      <h4>{{ product.price }}</h4>
      <nuxt-link to="" class="f6 link dim ph3 pv2 mb2 dib white bg-black ttu" :click="addToCart()">Add to cart</nuxt-link>
    </article>

  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed:{
    ...mapState (['storedata'])
  },
  methods: {
    ...mapGetters ([]),
    addToCart() {
      console.log("add")
    }
  }
}
</script>
