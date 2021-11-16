<template>
<div>
  Hello {{ name }} {{ jora }}
    <br>
    <NuxtLink to="/about">About</NuxtLink>
</div>
  
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Nick 333')
const jora = ref('jora')

</script>

<style>

</style>