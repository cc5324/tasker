import { create } from "zustand";
import { GithubAPI } from "@/API";

const useTaskStore = create((set) => ({
  stateOptions: [
    {
      name: "open",
      label: "open",
      value: "open",
      id: "5334016317",
      color: "base-content",
    },
    {
      name: "in_progress",
      label: "in progress",
      value: "in progress",
      id: "5334017295",
      color: "primary",
    },
    {
      name: "done",
      label: "done",
      value: "done",
      id: "5334018549",
      color: "error",
    },
  ],
}));

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

export { useTaskStore, useUserStore };
