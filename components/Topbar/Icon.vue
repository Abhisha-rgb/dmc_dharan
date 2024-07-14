<template>
    <div class="flex gap-2 ">
        <a :href="profileStore.school.facebook" target="_blank">
    <v-icon icon="mdi-facebook" variant="flat" color="white"></v-icon>
 </a>
      
        <v-icon icon="mdi-youtube" color="white"/>
        <v-icon icon="mdi-linkedin" color="white"/> 
        <div class=" border-r">  

        </div>
    </div>
</template>
<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore= useProfileStore();
</script>


