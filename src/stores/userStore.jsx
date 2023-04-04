import { create } from "zustand";
import { GithubAPI } from "@/API";

const useTaskStore = create((set) => ({}));

const useUserStore = create((set) => ({
  account: "",
  accessibleRepos: [],
  fetchAccount: async () => {
    const response = await GithubAPI.GET("/user");
    set({ account: response.login });
  },
  fetchRepos: async () => {
    const response = await GithubAPI.GET("/user/repos");
    const repos = response.map(({ name, owner }) => {
      return { name, owner: owner.login };
    });
    console.log(`get repo`, repos);
    set({ accessibleRepos: repos });
  },
}));

export { useUserStore };
