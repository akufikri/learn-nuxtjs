<template>
      <div class="card text-center">
            <img :src="products.image" alt="product thumb" srcset="" class="thumb">
            <p class="font-medium text-gray-500 m-4 truncate">{{ products.title }}</p>
            <nuxt-link :to="`/products/${products.id}`">
                  <p class="btn my-4">View details</p>
            </nuxt-link>
      </div>
</template>

<script setup>
const { product } = defineProps(['products'])
</script>

<style scoped>
.thumb {
      max-height: 120px;
      max-width: 70%;
      margin: 0 auto;
}
</style>