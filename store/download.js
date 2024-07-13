import axios from "axios";
import { defineStore } from "pinia";
export const usedownloadStore = defineStore ('download',{
state: () => {
    return{
        downloads:null,
        loading: false
    }
},
actions:{
   async getdownloads(){
    try{
        this.loading=false;
const response = await axios.get("https://dmcdharan.com/api/download");
 if(response.status==200){
    this.downloads=response.data.data;
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