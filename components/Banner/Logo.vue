<template>
    <div>
<v-img :src="profileStore.school.logo" class=" w-36">
</v-img>
    </div>
</template>
<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore= useProfileStore()

</script>