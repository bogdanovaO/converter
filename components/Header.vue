<template>
  <div style="margin: 0 15%">
    <nav
      class="navbar"
      :class="$style.navBcg"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-item" style="padding: 0 !important">
        <NuxtLink :class="$style.link" to="/"
          ><fa
            style="color: #fff; font-size: 30px"
            :icon="['fa', 'exchange-alt']"
        /></NuxtLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item" style="padding: 0 !important">
          <NuxtLink :class="$style.link" to="/portfolio">
            <fa style="color: #fff; font-size: 30px" :icon="['fa', 'coins']" />
          </NuxtLink>
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
.navBcg
  background: transparent!important
</style>
