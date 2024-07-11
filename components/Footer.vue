<template>
  <section class=" bg-[#DBF1FF]">
    <v-container>
      <div class=" flex justify-between text-[#447C9D]">
        <div class=" flex flex-col gap-2">
            <h1 class=" font-bold text-2xl">
                Contact us
            </h1>
          <address>
            <h1> {{ profileStore.school.name }}</h1>
            <div>
              <h1> <v-icon icon="mdi-earth" />{{ profileStore.school.street }}</h1>
            </div>
            <div>
              <h1> <v-icon icon="mdi-email" />{{ profileStore.school.email }}</h1>
            </div>
            <div>
              <h1> <v-icon icon="mdi-phone" />{{ profileStore.school.contactOne }}</h1>
            </div>
            <div>
             <h1 class=" font-bold">
                Office Hour
             </h1>
             <div>
                <h1>{{ profileStore.school.office_hour }}</h1>
             </div>
            </div>
          </address>
        </div>
        <div class=" flex flex-col gap-2">
<h1 class=" font-bold text-2xl"> Quick Links</h1>
<div>
    <NuxtLink to=" /notices">Notice</NuxtLink>
</div>
<div>
    <NuxtLink to=" /galleries">photo</NuxtLink>
</div>
        </div>
        <div class=" flex flex-col gap-2">
            <h1 class=" font-bold">
                Location
            </h1>
            <div v-html=" profileStore.school.map">

            </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script setup>
import { useProfileStore } from "~/store/profile";
const profileStore = useProfileStore();
await profileStore.getSchoolProfile();
</script>
