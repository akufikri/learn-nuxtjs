<template>
      <div>
            <header class="shadow-sm bg-white">
                  <nav class="container mx-auto p-4 flex justify-between">
                        <nuxt-link class="font-semibold">Nuxt App</nuxt-link>
                        <ul class="flex gap-4">
                              <li>
                                    <nuxt-link to="/">Home</nuxt-link>
                              </li>
                              <li>
                                    <nuxt-link to="/about">About</nuxt-link>
                              </li>
                              <li>
                                    <nuxt-link to="/products" class="btn">Products</nuxt-link>
                              </li>
                        </ul>
                  </nav>
            </header>
            <div class="flex justify-center mt-5">
                  <div class="max-w-5xl w-full">
                        <slot />
                  </div>
            </div>
      </div>
</template>

<script>

</script>

<style scoped>
.router-link-exact-active {
      color: bisque;
}
</style>