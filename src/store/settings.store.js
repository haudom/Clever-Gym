import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  /**
   * @returns {{ weight: number, bornAt: string, name: string }}
   */
  state: () => ({
    weight: null,
    name: null,
    bornAt: null,
    // überschreibe die Standardwerte mit denen aus LocalStorage, falls verfügbar, ansonsten
    // übernehme einfach die properties aus einem leeren Objekt.
    ...JSON.parse(localStorage.getItem("settings") ?? "{}")
  }),
  actions: {
    /**
     * Setze die Nutzereinstellungen.
     * @param {object} settings 
     * @param {string} settings.name 
     * @param {string} settings.bornAt
     * @param {number} settings.weight 
     */
    setSettings({ name, bornAt, weight }) {
      this.name = name;
      this.bornAt = bornAt;
      this.weight = weight;

      localStorage.setItem("settings", JSON.stringify(this.$state));
    },
  }
});
