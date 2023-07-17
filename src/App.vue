<template>
  <div>
    <v-nav />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
  import VNav from "./components/header/VNav.vue";
  export default {
    components: { VNav },
    name: "App",
  };
</script>

<style lang="scss" scoped>
</style>