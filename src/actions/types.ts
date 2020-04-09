import { Person } from "models/person";

export type actionTypes = "FETCH_DATA" | "SELECT_PERSON";

export interface Action {
  type: actionTypes;
  data: Person[];
  payload: string;
}

export default {
  get FETCH_DATA(): "FETCH_DATA" { return "FETCH_DATA"; },
  get SELECT_PERSON(): "SELECT_PERSON" { return "SELECT_PERSON"; },
};
