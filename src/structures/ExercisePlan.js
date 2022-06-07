import { EXERCISES_BY_ID } from "../data/exercises";

export default class ExercisePlan {
  constructor() {
    this.exerciseId = "liegestütz";
    this.sets = 3;
    this.weight = 5;
  }

  get exercise() {
    return EXERCISES_BY_ID[this.exerciseId];
  }
}
