export class Exercise {
  /**
   * @param {object} opts 
   * @param {string} opts.id
   * @param {string} opts.url
   * @param {string} opts.name
   * @param {string} opts.description
   */
  constructor(opts) {
    /** @type {string} */
    this.id = opts.id;
    /** @type {string} */
    this.url = opts.url;
    /** @type {string} */
    this.name = opts.name;
    /** @type {string} */
    this.description = opts.description;
  }
}

/**
 * Die feste Liste an möglichen Übungen, die man über die App auswählen kann.
 */
export const EXERCISES = [
  new Exercise({
    id: "liegestütz",
    url: "/",
    name: "Liegestütz",
    description: "Irgendeine Beschreibung",
  }),
];

/** @type {{ [id: string]: Exercise }} */
export const EXERCISES_BY_ID = Object.assign(
  ...EXERCISES.map(exercise => ({ [exercise.id]: exercise })),
);
