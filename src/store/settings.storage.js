import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  /**
   * @returns {{ weight: number, age: number, name: string }}
   */
  state: () => ({
    weight: null,
    name: null,
    age: null,
    // überschreibe die Standardwerte mit denen aus LocalStorage, falls verfügbar, ansonsten
    // übernehme einfach die properties aus einem leeren Objekt.
    ...(localStorage.getItem("settings") ?? {})
  }),
  actions: {
    /**
     * Setze die Nutzereinstellungen.
     * @param {object} settings 
     * @param {string} settings.name 
     * @param {number} settings.age
     * @param {number} settings.weight 
     */
    setSettings({ name, age, weight }) {
      this.name = name;
      this.age = age;
      this.weight = weight;

      localStorage.setItem("settings", JSON.stringify(this.$state));
    },
  }
});
