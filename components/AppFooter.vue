<template>
    <footer>
        <section class="callout w-100 white">
            <h2>"surprising styles of Skyline Ivy are advanced for all seasons."</h2>
            <p>Hansel Andersen</p>
        </section>

        <AppFooterLinks />
    </footer>
</template>

<script>
import AppFooterLinks from '~/components/AppFooterLinks'

export default {
    components: {
        AppFooterLinks
    }
    
}
</script>

<style lang="scss" scoped>
.callout {
    background: url("/callout.jpg") center center no-repeat;
    background-size: cover;
}

</style>