<template>
  <div>
    <h1 class="text-[#447C9D] text-3xl font-semibold text-center mb-8">
      Our Programs
    </h1>
    <div class=" grid grid-cols-4 gap-3">
      <div v-for="program in programsStore.programs" :key="program">
      <NuxtLink :to="`/program/${program.slug}`"><v-btn> {{ program.title }}</v-btn></NuxtLink>
    </div>
    </div>
  </div>
</template>
<script setup>
import { useProgramsStore } from "~/store/programs";
const programsStore = useProgramsStore();
await programsStore.getProgram();
</script>
