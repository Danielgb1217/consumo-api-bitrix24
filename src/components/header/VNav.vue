<template>
  <div
    class="flex flex-wrap text-justify sm:justify-between items-center mx-10 rounded-lg border py-5 bg-blue-900"
  >
    <div class="w-full sm:w-auto mb-5 sm:mb-0">
      <router-link
        class="text-xl sm:text-xl lg:text-3xl font-bold text-white block text-justify"
        :to="{ name: 'home' }"
      >
        <p>
          1. Consumir algún servicio expuesto de la siguiente plataforma (20
          pts.) https://training.bitrix24.com/rest_help/ la informacion debe ser
          mostrada en una página web con diseño responsive.
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "VNav",
};
</script>

<style lang="scss" scoped>
</style>
