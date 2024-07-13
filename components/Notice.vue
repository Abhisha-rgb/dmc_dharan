<template>
    <section>
        <v-container>

            <table>

                <tr>
                    <th>sn</th>
                    <th>subject</th>

                    <th>noticecategory</th>
                    <th>file</th>

                </tr>
            </table>
        </v-container>

    </section>
</template>

<script setup>
import { useNoticeStore } from "~/store/notice";
const noticeStore =useNoticeStore();
await noticeStore.getNotices();
</script>
