<template>

    <div>
        <header>
            <Topbar />
            <Banner />
           <Navbar />
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
<script setup>

// notice
import { onMounted } from 'vue'
import { useFlowbite } from '~/composables/useFlowbite';

import { useNoticeStore } from "~/store/notice";

// initialize components based on data attribute selectors
onMounted(() => {
    useFlowbite(() => {
        initFlowbite();
    })
})

const noticeStore =useNoticeStore();
await noticeStore.getNotices();
await noticeStore.getlatestnotice();
// flowbite
 

import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();





await profileStore.getSchoolProfile();


</script>
