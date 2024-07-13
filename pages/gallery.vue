<template>
  <section>
    <v-container>
      <v-row>
    <v-col
      v-for="gallery in galleryStore.galleries"
      :key="gallery.id"
      class="d-flex child-flex"
      cols="4"
    >
    <div class=" border p-8 hover:shadow-md">
      <NuxtLink :to="gallery.url" target="_blank">
      <v-img 
        :lazy-src="gallery.featuredImage"
        :src="gallery.featuredImage"

        class="bg-grey-lighten-2 aspect-square"
        cover
        width="300"
      >
        <template v-slot:placeholder>
          <v-row
            align="center"
            class="fill-height ma-0"
            justify="center"
          >
            <v-progress-circular
              color="grey-lighten-5"
              indeterminate
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
     </NuxtLink>
     <h1 class=" pt-5 ">{{ gallery.title  }}</h1>
    </div>
     
    </v-col>
  </v-row>

    </v-container>
  </section>
  
</template>
<script setup>
import { useGalleryStore } from "~/store/gallery";
const galleryStore = useGalleryStore();
await galleryStore.getGallery();

</script>

