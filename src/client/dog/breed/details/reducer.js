import {
  SET_BREED,
  SET_BREED_DOGS,
  SET_SUB_BREED,
  START_LOADING,
  STOP_LOADING,
} from './actionTypes';

export const initialState = {
  breed: null,
  breedDogs: [],
  subBreeds: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BREED: {
      return {
        ...state,
        breed: action.breed,
      };
    }
    case SET_BREED_DOGS: {
      return {
        ...state,
        breedDogs: action.breedDogs,
      };
    }
    case SET_SUB_BREED: {
      return {
        ...state,
        subBreeds: action.subBreeds,
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
