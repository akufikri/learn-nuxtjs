<template>
      <div>
            <h2 class="text-3xl mb-5 font-bold">About</h2>
            <p class="leading-relaxed mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in sapiente
                  voluptatum
                  ipsa nam mollitia
                  eligendi facilis, nostrum vel nisi praesentium laboriosam est nobis quis laudantium minima quaerat sunt
                  unde! Adipisci quasi sapiente ipsa repellendus consequuntur maxime expedita ipsam vitae, autem officiis vero
                  ad. Rem dolores eius provident culpa hic!</p>
            <p class="">{{ data }}</p>
      </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')
</script>

<style lang="scss" scoped></style>