<template>
    <section class="px-4 py-5">

        <div class="flex gap-2">
            <div class="px-3">notice:</div>
            <marquee behavior="" direction="">
             <div class="flex gap-2">
                <div v-for="notice in noticeStore.notices" :key="notice.id">

<div>
    <h1 class=" font-semibold"> <v-icon icon="mdi-bullhorn-outline"></v-icon> {{ notice.subject }}</h1>
</div>

</div>
             </div>
            </marquee>
        </div>


    </section>
</template>

<script setup>
import { useNoticeStore } from "~/store/notice";
const noticeStore = useNoticeStore();
await noticeStore.getNotices();
</script>
