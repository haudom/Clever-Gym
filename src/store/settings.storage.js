import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    weight: null,
    name: null,
    age: null,
  }),
  actions: {
    setSettings({ name, age, weight }) {
      this.name = name;
      this.age = age;
      this.weight = weight;

      localStorage.setItem("settings", JSON.stringify(this.$state));
    },
  }
});
