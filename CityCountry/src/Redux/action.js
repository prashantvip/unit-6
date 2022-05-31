export const ADD_CITY = "ADD_CITY";
export const ADD_COUNTRY = "ADD_COUNTRY";
export const ADD_CITIES = "ADD_CITIES";
export const DELETE_CITY = "DELETE_CITY ";

export const addCity = (data) => {
   return {
      type: ADD_CITY,
      payload: data,
   };
};

export const addCities = (data) => {
   return {
      type: ADD_CITIES,
      payload: data,
   };
};

export const addCountry = (data) => {
   return {
      type: ADD_COUNTRY,
      payload: data,
   };
};


export const deleteCity = (id) => {
  return {
    type: DELETE_CITY,
    id: id,
  };
};
