<template>
    <div>
        <v-dialog v-model="noticeStore.dialog" width="400">
            <v-card>
                <div class="text-right" >
                    <v-btn width="50" @click="noticeStore.click" > <v-icon icon="mdi-close"></v-icon></v-btn>
                </div>
                <img :src="noticeStore.notice.file" alt="">

            </v-card>
        </v-dialog>


        <!-- latestnotice -->
      <Latestnotice />

        <!-- photo slides -->
        <Slides />
        <!-- message -->
        <section>
            <v-container>
                <div v-for=" (message, index) in messageStore.messages" :key="index" class=" py-5">
                    <div class=" flex gap-4" v-if="index % 2 == 0">
                        <div class="w-1/2">
                            <img :src="message.photo" class="w-full" />
                        </div>

                        <div class=" flex flex-col gap-2">
                            <h1 class=" text-3xl">
                                {{ message.name }}
                            </h1>
                            <div v-html="message.message">
                            </div>
                            <div>
                                <v-btn>
                                    <Nuxt-Link :to="`/message/${message.slug}`"> read more</Nuxt-Link>
                                </v-btn>
                            </div>
                        </div>

                    </div>


                    <div class=" flex flex-row-reverse gap-4" v-else>
                        <div>
                            <img :src="message.photo" alt="" class=" w-full">
                        </div>
                        <div class=" flex flex-col gap-2">
                            <h1 class=" font-semi-bold text-3xl"> {{ message.name }}</h1>
                            <div v-html="message.message">
                            </div>
                            <div>
                                <v-btn>
                                    <Nuxt-Link :to="`/message/${message.slug}`"> read more</Nuxt-Link>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>

            </v-container>
        </section>

        <!-- notice  -->
        <v-container>
            <v-row>
                <v-col>
                    <Notice />
                </v-col>
                <v-col>

                </v-col>
            </v-row>
        </v-container>
        <!-- programs -->
        <v-container>

            <Programs />
        </v-container>
        <!-- gallery -->
        <section>
            <v-container>
                <h5 class="text-[#447C9D] text-3xl font-semibold text-center py-10"> Photo Gallery</h5>
                <gallery />
            </v-container>
        </section>
        <!-- memberprofile -->
        <section>
            <v-container>
                <MemberProfile />
            </v-container>
        </section>
    </div>

</template>
<script setup>
import { useNoticeStore } from "~/store/notice";
const noticeStore = useNoticeStore();



// import { NuxtLink } from '#build/components';
import { useMessageStore } from '~/store/message';
const messageStore = useMessageStore();
await messageStore.getMessages();



</script>
