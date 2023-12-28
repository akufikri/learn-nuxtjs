<template>
      <div>
            <p>{{ products.title }}</p>
            <p>{{ products.price }}</p>
            <p>{{ products.id }}</p>
      </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: products } = await useFetch(uri, { key: id })

definePageMeta({
      layout: 'products'
})

</script>

<style lang="scss" scoped></style>