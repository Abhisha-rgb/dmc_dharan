<template>
<section >
<v-img :src="message.photo"></v-img>
<div v-html="message.message"></div>
</section>


</template>

<script setup>

import MemberProfile from "~/components/MemberProfile.vue";
import { useMessageStore } from "~/store/message";
const messageStore = useMessageStore();

const message =  messageStore.messages.find((m) => m.slug == "message-from-principal" );



</script>

<style lang="scss" scoped>

</style>