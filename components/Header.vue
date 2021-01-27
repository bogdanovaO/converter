<template>
  <div style=" margin: 0 15%;">
    <nav class="navbar" :class="$style.navBcg" role="navigation" aria-label="main navigation">
      <div class="navbar-brand" :class="$style.logo">
                <NuxtLink style="color: #fff" to="/">Converter</NuxtLink>
      </div>
       <div class="navbar-end">
      <div class="navbar-item" style="padding: 0!important;">
        <NuxtLink class="button is-link is-inverted is-outlined" :class="$style.link" to="/portfolio">portfel</NuxtLink>
      </div>
       </div>
    </nav>
  </div>
</template>

<script>
import Converter from "~~/components/Converter.vue";
export default {
  components: {
    Converter,
  },
};
</script>

<style lang="sass" module>
.logo
 color: #fff
.navBcg
 background: transparent!important
</style>
