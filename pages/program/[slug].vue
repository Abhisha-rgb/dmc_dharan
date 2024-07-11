<template>
    <section>
<v-container>
    <div v-for="program in programsStore.programs" :key="program.id">
        <div> <h1>{{program.title}}</h1></div>
        <div v-html="program.content"></div>
    </div>
</v-container>
    </section>
</template>

<script setup>
import { useProgramsStore } from "~/store/programs";
const programsStore = useProgramsStore();
await programsStore.getProgram();

</script>

