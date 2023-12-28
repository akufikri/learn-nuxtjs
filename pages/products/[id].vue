<template>
      <div>

            <Head>
                  <Title>Nuxt App | {{ products.title }}</Title>
                  <Meta name="description" :content="products.description" />
            </Head>
            <ProductDetails :products="products" />
      </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: products } = await useFetch(uri, { key: id })

if (!products.value) {
      throw createError({
            statusCode: 404, statusMessage: 'Products not found'
      })
}

definePageMeta({
      layout: 'products'
})

</script>

<style lang="scss" scoped></style>