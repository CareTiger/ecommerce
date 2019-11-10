<template>
  <section>

    <article  class="mw5 ba pa3 ma3 dib" v-for="product in storedata" :key="product.id">
      <img :src="`/products/${product.img}`" alt="">
      <h1>{{ product.name }}</h1>
      <h4>{{ product.price | dollar }}</h4>
      <nuxt-link :to="`product/${product.id}`" class="f7 link dim ph3 pv2 mb2 dib white bg-black ttu">Details</nuxt-link>
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
  }
}
</script>
