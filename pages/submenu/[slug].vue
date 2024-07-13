<template>
    <section>
        <v-container>

      <div>
         <div> {{ post.title }} </div>

         <div v-html="post.content"></div>
         <div> <v-img :src="post.image"></v-img> </div>
      
      </div>
        </v-container>

    </section>
</template>
<script setup>
import {  usemenuStore} from "~/store/menu";
const menuStore=usemenuStore();
const route = useRoute();
await menuStore.getmenus();


const posts = menuStore.menus.map((m)=> m.posts.find((p) => p.slug == route.params.slug));
const post=posts.find((p) => p!=null)

</script>
