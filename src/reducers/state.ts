import { Person } from "models/person";

export interface StoreState {
  fetching: boolean | undefined;
  people: Person[];
  selectedPersonID: string;
}

export const initialStoreState: StoreState = {
  fetching: undefined,
  people: [],
  selectedPersonID: "",
};
