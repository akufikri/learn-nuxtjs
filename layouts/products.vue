<template>
      <div>
            <header class="shadow-sm bg-white">
                  <nav class="container mx-auto p-4 flex justify-between">
                        <nuxt-link to="/products" class="font-semibold">Nuxt App Merch</nuxt-link>
                  </nav>
            </header>
            <div class="flex justify-center mt-5">
                  <div class="container w-full">
                        <slot />
                  </div>
            </div>
            <footer class="container mx-auto p-4 flex justify-between border-t-2 mt-5">
                  <div class="flex gap-4">
                        <nuxt-link to="/">Home</nuxt-link>
                        <nuxt-link to="/about">About</nuxt-link>
                        <nuxt-link to="/products">Products</nuxt-link>
                  </div>
            </footer>
      </div>
</template>

<script>

</script>

<style scoped>
.router-link-exact-active {
      color: bisque;
}
</style>