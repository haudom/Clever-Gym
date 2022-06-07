import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import moment from "moment";

export const useLocalStore = defineStore("local", {
  state: () => ({
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
