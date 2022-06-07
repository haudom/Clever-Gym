import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import moment from "moment";

export const useLocalStore = defineStore("local", {
  state: () => ({
    settings: useStorage("settings", {
      weight: null,
      name: null,
      age: null,
    }),
    calendar: useStorage("calendar", {
      createdAt: moment().toISOString(),
      weeks: [],
    }),
    statistics: useStorage("statistics", {
      uebungen: [{
        trainingseinheiten: [{
          datum, gewicht, wiederholungsanzahl,
        }]
      }]
    }),
  }),
});
