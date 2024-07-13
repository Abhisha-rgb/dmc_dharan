<template>
    <section>
        <v-container>
<div class=" flex flex-col gap-4">
   <h1 class=" text-4xl text-[#447C9D] font-semibold">
    {{ faq.data.title }}
   </h1>
   <div v-html="faq.data.description">

   </div>
</div>
        </v-container>
    </section>
  
</template>
<script setup>
const { data: faq}= await useFetch ("https://dmcdharan.com/api/faq");
</script>

