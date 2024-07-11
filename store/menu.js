import axios from "axios";
import { defineStore } from "pinia";
export const usemenuStore = defineStore ('menu',{
state: () => {
    return{
        menus:null,
        loading: false
    }
},
actions:{
   async getmenus(){
    try{
        this.loading=false;
const response = await axios.get("https://dmcdharan.com/api/menus");
 if(response.status==200){
    this.menus=response.data.data;
 }
    }
    catch(e){
console.log(e)
    }
    finally{
        this.loading=false;
    }
   }
}
}
);