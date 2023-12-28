<template>
      <div class="card">
            <div class="grid grid-cols-2 gap-10">
                  <div class="p-7">
                        <img :src="products.image" alt="" srcset="" class="mx-auto my-7">
                  </div>
                  <div class="p-7">
                        <h2 class="text-4xl my-7">{{ products.title }}</h2>
                        <p class="text-xl my-7">Price - ${{ products.price }}</p>
                        <h3 class="font-bold border-b-2 mb-4 pb-2">Products desc:</h3>
                        <p class="mb-7">{{ products.description }}</p>
                        <button class="btn flex gap-2">
                              <i class="fa-solid fa-cart-plus mt-0.5"></i>
                              <span>Add Cart</span>
                        </button>
                  </div>
            </div>
      </div>
</template>

<script setup>
const { products } = defineProps(['products'])
</script>

<style scoped>
img {
      max-width: 400px;
}
</style>