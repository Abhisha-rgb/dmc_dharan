<template>
    <v-row>
      <v-col
        v-for="gallery in galleryStore.galleries"
        :key=" gallery"
        class="d-flex child-flex"
        cols="4"
      >
        <div class=" w-96">
         <NuxtLink :to="gallery.url" target="_blank">   <v-img
          :lazy-src=" gallery.featuredImage "
          :src=" gallery.featuredImage"
          aspect-ratio="1"
          class="bg-grey-lighten-2"
          cover
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
        </v-img></NuxtLink>
        <h5>
            {{ gallery.title }}
        </h5>
        </div>
   
      </v-col>
    </v-row>
  </template>
  <script setup>
import { useGalleryStore } from '~/store/gallery';
const galleryStore= useGalleryStore();
await galleryStore.getGallery();
  </script>