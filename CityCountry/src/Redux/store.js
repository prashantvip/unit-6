import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initState = {
   cities: [],
};

export const store = legacy_createStore(reducer, initState);

store.subscribe(() => {
   console.log(store.getState());
});
