import {
  SELECT_BREED,
  SET_BREEDS,
  SET_SELECTED_BREED_DOGS,
  START_LOADING,
  STOP_LOADING,
} from './actionTypes';

export const initialState = {
  breeds: [],
  selectedBreed: null,
  selectedBreedDogs: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BREEDS: {
      return {
        ...state,
        breeds: action.breeds,
      };
    }
    case SELECT_BREED: {
      return {
        ...state,
        selectedBreed: action.breed,
      };
    }
    case SET_SELECTED_BREED_DOGS: {
      return {
        ...state,
        selectedBreedDogs: action.breedDogs,
      };
    }
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case STOP_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
