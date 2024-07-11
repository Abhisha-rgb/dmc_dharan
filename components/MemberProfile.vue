<template>
  <section>
    <v-container>
<div>
<h1 class=" font-semibold text-[#447C9D] text-3xl text-center py-10">
  {{ member.title }}
</h1>
<div class="grid grid-cols-1 md:grid-cols-4  gap-3">
  <div v-for="members in member.members" :key="members.id" class="border ">
  <div  class="w-40 ">
    <v-img class="rounded-lg " :src="members.photo" :lazy-src="members.photo" ></v-img>
  </div>
  <div class="px-2 ">
    <h1  >{{ members.name }}</h1>
  <h1>{{ members.title }}</h1>
  <h1>{{ members.designation }}</h1>
  <h1> <v-icon icon="mdi-phone"></v-icon>{{ members.phone }}</h1>
  <h1> <v-icon icon="mdi-email"></v-icon> {{ members.email }}</h1>
  </div>




</div>
</div>

</div>
 
    </v-container>

  </section>
</template>


<script setup>
import { useMemberProfileStore } from "~/store/memberprofile";
const memberprofile =useMemberProfileStore();
await memberprofile.getMembers();

const member =memberprofile.members.find((m) => m.slug== "academic-members-profile")

</script>






<!--<template>
  <section>
<v-container>

  <div v-for="member in memberprofile.members" :key="member.id">


    <div> 
<div v-if="member.id%2!==0">
  <h1 > {{ member.title }}</h1>
  <div v-for="members in member.members" :key="members.id">
<v-img :src="members.photo" ></v-img>
  </div>
</div>
<div v-else>
  <h1 > {{ member.title }}</h1>
</div>


    </div>
   
  </div> 
</v-container>
  </section>
</template>-->

<style lang="scss" scoped>

</style>