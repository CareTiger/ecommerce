<template>
  <section>
    <ul>
      <li></li>
    </ul>
    <article v-for="product in storedata" :key="product.id">
      {{product}}
      <hr>
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
