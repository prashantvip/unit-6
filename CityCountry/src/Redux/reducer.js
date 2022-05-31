import {ADD_CITY, ADD_COUNTRY, ADD_CITIES, DELETE_CITY} from "./action";

export const reducer = (store, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CITY:
      return {
        ...store,
        cities: [...store.cities, ...action.payload],
      };
    case ADD_CITIES:
      return {
        ...store,
        cities: [...action.payload],
      };
    case ADD_COUNTRY:
      return {
        ...store,
        cities: [...action.payload],
      };

    case DELETE_CITY:
      return {
        ...store,
        cities: store.cities.filter((c) => c.id !== action.payload),
      };

    default:
      return {...store};
  }
};
