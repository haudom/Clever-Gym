import { defineStore } from "pinia";
import moment from "moment";

import Week from "../structures/Week";

export const useCalendarStore = defineStore("calendar", {
  /**
   * @returns {{ startedAt: moment.Moment, weeks: Week[] }}
   */
  state: () => {
    try {
      const local = JSON.parse(localStorage.getItem("calendar"));

      return {
        startedAt: moment(local.startedAt),
        weeks: local.weeks.map(week => new Week(week)),
      };
    } catch {
      // Initialisierter Wert
      return {
        startedAt: moment(),
        weeks: [new Week()],
      };
    }
  },
});
