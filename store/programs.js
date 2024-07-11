import axios from "axios";
import { defineStore } from "pinia";
export const useProgramsStore = defineStore("programs", {
    state : () => ({
        programs :null,
        loading :false
    }),
    actions: {
        async getProgram() {
          try {
            this.loading = true;
            const response = await axios.get(
              "https://dmcdharan.com/api/programs"
            );
            if (response.status == 200) {
              this.programs = response.data.data;
            }
          } catch (e) {
            console.log(error);
          } finally {
            this.loading = false;
          }
        },
      },
});
