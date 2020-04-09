import { Person } from "models/person";

export interface StoreState {
  fetching: boolean;
  people: Person[];
  selectedPersonID: string | undefined;
}

export const initialStoreState: StoreState = {
  fetching: false,
  people: [],
  selectedPersonID: undefined,
};
