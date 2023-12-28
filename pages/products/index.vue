<template>
      <div class="grid grid-cols-4 gap-4">
            <div v-for="p in products">
                  <nuxt-link :to="`/products/${p.id}`">{{ p.title }}</nuxt-link>
            </div>
      </div>
</template>

<script setup>
definePageMeta({
      layout: 'products'
})
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped></style>