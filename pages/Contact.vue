<template>
    <section>
        <v-container class=" pb-14">
            <h1 class=" text-4xl text-[#447C9D]"> Get in Touch<v-icon icon="mdi-card-account-details" /></h1>
            <div class=" flex justify-between gap-16">
             
                <div class=" flex flex-col gap-3 border px-4">
                    
                    <div>
                       <h1 class=" font-semibold text-2xl  border-b">{{profileStore.school.name}}</h1>
                       </div>
                       <div>
                        <h1 class=" border-b">
                             <v-icon icon="mdi-earth" /> {{ profileStore.school.street }}
                        </h1>
                    </div>
                    <div>
                        <h1 class=" border-b">
                             <v-icon icon="mdi-phone" /> {{ profileStore.school.contactOne }}
                        </h1>
                    </div>
                    <div>
                        <h1 class=" border-b">
                             <v-icon icon="mdi-email" /> {{ profileStore.school.email }}
                        </h1>
                    </div>
                    <div v-html=" profileStore.school.map">
                      
                    </div>
                </div>
                <div class=" w-full">
                    <h1 class="text-[#447C9D] text-4xl"> Send Message</h1>
                   <form >
                    <div>
                        <label class=" text-[#447C9D]" for="Full name">Full Name</label>
                        <input type="text" placeholder="Enter your name" class=" border  w-full px-4">
                    </div>
                    <div>
                        <label class=" text-[#447C9D]"  for="Email">Email</label>
                        <input type="text" placeholder="Enter your email" class=" border  w-full px-4">
                    </div>
                    <div>
                        <label class=" text-[#447C9D]"  for="Subject">Subject</label>
                        <input type="text" placeholder="Subject" class=" border w-full px-4">
                    </div>
                    <div>
                        <label class=" text-[#447C9D]"  for="Message">Message</label>
                     <textarea  name="Message" id="" placeholder=" Enter your message" class=" border w-full px-4"></textarea>
                    </div>
           <v-btn 
           color="#447C9D">
           Submit
           </v-btn>
                   </form>
                </div>
            </div> 
           
        </v-container>
    </section>
</template>
<script setup>
import { useProfileStore } from '~/store/profile';
const profileStore = useProfileStore();
</script>
