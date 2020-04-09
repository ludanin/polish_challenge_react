import types, { Action } from "actions/types";
import { Person } from "models/person";

export interface Actions {
  /**
   * Fetches information from our database. A Saga is run to keep this action
   * continuously running
   */
  FETCH_DATA: () => Partial<Action> & { data?: Person[] };

  /**
   * Selects a new person to show information on the bottom of the screen
   *
   * If the user selects the same person, that information is removed.
   */
  SELECT_PERSON: (personID: string) => Partial<Action> & { payload: string; };
}

export const FETCH_DATA: Actions["FETCH_DATA"] = () => ({
  type: types.FETCH_DATA,
});

export const SELECT_PERSON: Actions["SELECT_PERSON"] = (personID) => ({
  type: types.SELECT_PERSON, payload: personID,
});
