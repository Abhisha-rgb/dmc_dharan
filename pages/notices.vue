<template>
  <section>
    <v-container>
     
      <div class=" p-8 pb-7">
        <h1 class=" text-4xl text-[#447C9D] text-center pb-3 font-semibold"> Notice</h1>
        <table class=" w-full text-center border">
          <tr class=" border bg-[#447C9D] text-white">
           <th class="px-6">Sn</th>
            <th class=" border border-l px-6"> Subject </th>
            <th class=" border border-l px-6">Notice Category</th>
            <th class=" border border-l px-6" > Downloads </th>
          </tr>
          <tr v-for=" notice in noticeStore.notices" :key="notice" class=" border ">
<td>{{ notice.createdAt }}</td>
            <td  class=" border border-l px-6">{{ notice.subject }}</td>
            <td  class=" border border-l px-6">
              {{ notice.noticeCategory }}
            </td>
            <td class=" border border-l px-6" >
              <a href="#" :download="notice.file"><v-col cols="auto">
        <v-btn size="small" color="#447C9D">Download</v-btn>
      </v-col></a>
            </td>
          </tr>
        </table>
      </div>
    </v-container>
  </section>

</template>

<script setup>
import { useNoticeStore } from '~/store/notice';
const noticeStore = useNoticeStore();
const items = noticeStore.notices;
</script>