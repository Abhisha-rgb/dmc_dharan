import axios from "axios";
import { defineStore } from "pinia";
export const useMemberProfileStore = defineStore("membersprofile", {
  state: () => {
    return {
      members: null,
      loading: false,
    };
  },

  actions: {
    async getMembers() {
      try {
        this.loading = true;
        const response = await axios.get("https://dmcdharan.com/api/members");
        if (response.status == 200) {
          this.members = response.data.data;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
