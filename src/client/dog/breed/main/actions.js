import { push } from 'react-router-redux';
import {
  SELECT_BREED,
  SET_BREEDS,
  SET_SELECTED_BREED_DOGS,
  START_LOADING,
  STOP_LOADING,
} from './actionTypes';
import BreedsDataService from '../service/data';

export const startLoading = () => ({ type: START_LOADING });

export const stopLoading = () => ({ type: STOP_LOADING });

export const setDogsBreeds = breeds => (dispatch) => {
  dispatch({
    type: SET_BREEDS,
    breeds,
  });
};

export const setSelectedBreedDogs = breedDogs => (dispatch) => {
  dispatch({
    type: SET_SELECTED_BREED_DOGS,
    breedDogs,
  });
};

export const goToBreedDetailsPage = breed => (dispatch) => {
  dispatch(push(`/dogs/breed/${breed.name}`));
};

export const selectBreed = breed => (dispatch) => {
  dispatch({
    type: SELECT_BREED,
    breed,
  });

  dispatch(goToBreedDetailsPage(breed));
};

export const fetchDogsData = () => async (dispatch) => {
  dispatch(startLoading());

  const dogsBreeds = await BreedsDataService.getAllDogsBreeds();
  const randomDogs = await BreedsDataService.getRandomDogs(12);

  dispatch(setDogsBreeds(dogsBreeds));
  dispatch(setSelectedBreedDogs(randomDogs));
  dispatch(stopLoading());
};

export const fetchDogs = () => async (dispatch, getState) => {
  const state = getState();
  const { selectedBreedDogs } = state.dog.breed.main;
  const randomDogs = await BreedsDataService.getRandomDogs(12);

  dispatch(setSelectedBreedDogs([
    ...selectedBreedDogs,
    ...randomDogs,
  ]));
};
