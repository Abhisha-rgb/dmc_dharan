import axios from "axios";
import {defineStore} from "pinia"
export const useNoticeStore =defineStore('notice',{
    state:() => {
return {
    notices: null,
    loading:false,
    dialog:false,
    notice:null
 

}
    },

    actions:{
        async getNotices(){
            try{
this.loading=true;
const response= await axios.get("https://dmcdharan.com/api/notices")
if(response.status==200){
    this.notices= response.data.data;
    if(this.notices.length>0){
        this.dialog=true;
    }
}
            }
            catch(e){
    console.log(e)
            }
            finally{
                this.loading= false;
    
            }
        },


        async getlatestnotice(){
            try{
this.loading=true;
const response= await axios.get("https://dmcdharan.com/api/notice")
if(response.status==200){
    this.notice= response.data.data;
    
}
            }
            catch(e){
    console.log(e)
            }
            finally{
                this.loading= false;
    
            }
        },

        click(){
            this.dialog=false;
        }
        
        
    }


  

   
});