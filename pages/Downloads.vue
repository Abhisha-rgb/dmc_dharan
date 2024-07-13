<template>

    <section>
        <v-container class=" flex flex-col gap-3 py-9 ">
            <h1 class=" text-4xl text-[#447C9D] text-center "> Download </h1>
            <div>
                <table class=" w-full border">
                    <tr class=" border ">
                        <th class="text-left "> Subject </th>
                        <th class=" text-center border-l"> Actions</th>
                    </tr>
                    <tr v-for=" download in downloadStore.downloads" 
                    :key="download.id" mb-2 class=" border ">
                        
                        <td >{{ download.title }}</td>

                        <td class=" text-center  border-l">
                            <a href="#" :download="download.googleDrive"> <v-btn size="small" color="#447C9D">Download</v-btn></a>
                        </td>
                    </tr>
                </table>
            </div>
        </v-container>
    </section>

</template>

<script setup>
import { usedownloadStore } from "~/store/download";
const downloadStore = usedownloadStore();
await downloadStore.getdownloads();
</script>
