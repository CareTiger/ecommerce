<template>
  <section>

    <article  class="mw5 ba pa3 ma3" v-for="product in storedata" :key="product.id">
      <img :src="`/products/${product.img}`" alt="">
      <h1>{{ product.name }}</h1>
      <h4>{{ product.price }}</h4>
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

  }
}
</script>
