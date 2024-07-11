<template>
    <div>
<h1 class=" text-3xl text-[#447C9D]">{{ profileStore.school.name }}</h1>
<h1 class=" text-[#F90000] font-italic font-extralight ">
 {{ profileStore.school.slogan }}
</h1>
    </div>
</template>
<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore=useProfileStore()
</script>
