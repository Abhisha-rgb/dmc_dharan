<template>
    <section>
        <v-container>
<div>
   <h1 class=" text-4xl text-[#447C9D] font-medium">
    {{ pedagogy.data.title }}
   </h1>
   <div v-html="pedagogy.data.description">

   </div>
</div>
        </v-container>
    </section>
  
</template>
<script setup>
const { data: pedagogy}= await useFetch ("https://dmcdharan.com/api/pedagogy");
</script>

