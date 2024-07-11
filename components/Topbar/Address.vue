<template>
    <div class=" flex gap-4">
     <div>
        <v-icon icon="mdi-map-marker" color="white"/>
       <span class=" text-white">
        {{ profileStore.school.street }}
       </span>
     </div>
     <div>
        <v-icon icon="mdi-email" color="white"/>
        <span  class=" text-white">
            {{ profileStore.school.email }}
        </span>
     </div>
     </div>
</template>
<script setup>
import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();
</script>


