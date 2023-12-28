<template>
      <div class="grid grid-cols-4 gap-4">
            <div v-for="p in products">
                  <product-card :products="p" />
            </div>
      </div>
</template>

<script setup>
definePageMeta({
      layout: 'products'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products')
useHead({
      title: "Nuxt App | Merch",
      meta: [
            { name: "description", content: "Nuxt Merch" }
      ]
})
</script>

<style lang="scss" scoped></style>