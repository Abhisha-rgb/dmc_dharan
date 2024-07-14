<template>
  <section class="py-10">
    <v-container class="flex flex-col gap-4 border-l border-gray-400">
      <h1 class="text-3xl text-[#447C9D] capitalize">notice(campus notice)</h1>
      <div class="flex flex-col gap-4">
        <div v-for="notice in noticeStore.notices" :key="notice.id">
          <div>
            {{ notice.subject }}
          </div>
          <div class="text-xs">
            {{ notice.createdAt }}
          </div>
        </div>
        <div class="border-b"></div>
      </div>
      <div class="text-right">
        <nuxt-link to="/notices">
          <v-btn color="#447C9D"> more  <v-icon icon="mdi-greater-than" /> <v-icon icon="mdi-greater-than" /></v-btn>
        </nuxt-link>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { useNoticeStore } from "~/store/notice";
const noticeStore = useNoticeStore();

</script>
