import types, { Action } from "actions/types";
import { initialStoreState, StoreState } from "reducers/state";

export default function(
  state: StoreState = {...initialStoreState},
  action: Action,
): StoreState {
  switch (action.type) {
    case types.FETCH_DATA: {
      if (action.data === undefined) {
        // When our Saga has successfully fetched information from the server
        // the property `data` is never going to be undefined. And due to
        // that, in this case, we just want to make sure the user knows
        // that information is being fetched
        return {
          ...state,
          fetching: true,
        };
      }

      return {
        ...state,
        fetching: false,
        people: action.data,
      };
    }

    // Should select a new person to be shown on the footer, or unselect
    // that person if the user selects the same person again
    case types.SELECT_PERSON: {
      const { selectedPersonID } = state;
      if (selectedPersonID) {
        if (selectedPersonID === action.payload) {
          return {
            ...state,
            selectedPersonID: "",
          };
        }
      }
      return {
        ...state,
        selectedPersonID: action.payload,
      };
    }

    default: return state;
  }
}
