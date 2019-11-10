<template>
  <div>
    <AppNav />
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNav,
    AppFooter
  }  
}
</script>