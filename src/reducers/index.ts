import { combineReducers } from "redux";

import { Actions } from "actions";
import reducer from "reducers/reducer";
import { StoreState } from "reducers/state";

/**
 * Matches the common `mapStateToProps`
 */
interface ReduxProps {
  Store: StoreState;
}

// These types are used to feed the type-data of components' props.
// The capital 'R' implies Redux.

/**
 * Exports type-data of both the store and actions
 */
export type RPropsComplete = ReduxProps & Actions;

/**
 * Exports only type-data from the store, a component that doesn't dispatch
 * any action
 */
export type RPropsStore = ReduxProps;

/**
 * Exports only type-data of actions, a component that doesn't use any data
 * from the store, i.e. only dispatchs actions
 */
export type RPropsActions = Actions;

export default combineReducers({ Store: reducer });
