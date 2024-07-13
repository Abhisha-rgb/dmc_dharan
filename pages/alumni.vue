<template>
    <section>
        <v-container>
<div>
   <h1 class=" text-4xl text-[#447C9D]">
    {{ alumni.data.title }}
   </h1>
   <div v-html="alumni.data.description">

   </div>
</div>
        </v-container>
    </section>
  
</template>
<script setup>
const { data: alumni}= await useFetch ("https://dmcdharan.com/api/alumni");
</script>

