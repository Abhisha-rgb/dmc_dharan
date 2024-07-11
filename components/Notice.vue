<template>
<section class="py-20 ">
    
    <v-container>
   
    <div class="border-l border-gray-500 px-4 pb-10">
        <div class="flex flex-col gap-3 border-b pb-3 border-gray-900">
 <h1 class="text-l text-2xl text-[#457D9E] capitalize pr-5">notice(Campus Notice)</h1>
<div v-for="notice in noticeStore.notices" :key="notice.id">
<div>{{ notice.subject }}</div>
<div class=" text-xs">{{ notice.createdAt }}</div>
</div>
</div>
<div class="text-right ">
    <v-btn>
        more
    </v-btn>
</div>
    </div>
        
    </v-container>
    </section>   
</template>
<script setup>
import { useNoticeStore } from "~/store/notice";
const noticeStore =useNoticeStore();
await noticeStore.getNotices();
</script>
