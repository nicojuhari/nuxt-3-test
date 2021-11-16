<script setup>
    console.time('setup')
    const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts')

    console.timeEnd('setup')

</script>

<template>
    <div>
        <NuxtLink to="/">
        About (internal link that belongs to the Nuxt App)
        </NuxtLink>
        <div v-for="item in data" :key="item.id">
            {{ item.id}} : => {{ item.title }} 
        </div>
    </div>
</template>