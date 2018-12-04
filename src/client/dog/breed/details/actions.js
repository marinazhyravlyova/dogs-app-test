import { push } from 'react-router-redux';
import {
  SET_BREED,
  SET_BREED_DOGS,
  SET_SUB_BREED,
  START_LOADING,
  STOP_LOADING,
} from './actionTypes';
import BreedsDataService from '../service/data';

export const startLoading = () => ({ type: START_LOADING });

export const stopLoading = () => ({ type: STOP_LOADING });

export const setBreedDogs = breedDogs => (dispatch) => {
  dispatch({
    type: SET_BREED_DOGS,
    breedDogs,
  });
};

export const setSubBreeds = subBreeds => (dispatch) => {
  dispatch({
    type: SET_SUB_BREED,
    subBreeds,
  });
};

export const setBreed = breed => (dispatch) => {
  dispatch({
    type: SET_BREED,
    breed,
  });
};

export const goToSubBreedPage = subBreed => (dispatch, getState) => {
  const state = getState();
  const { breed } = state.dog.breed.details;

  dispatch(push(`/dogs/breed/${breed.name}/${subBreed.name}`));
};

export const fetchDogsData = ({ breedName }) => async (dispatch) => {
  dispatch(startLoading());
  const breed = { name: breedName };

  dispatch(setBreed(breed));

  const breedDogs = await BreedsDataService.getRandomDogByBreed(breedName, 12);
  const subBreeds = await BreedsDataService.getSubBreeds(breedName);

  dispatch(setBreedDogs(breedDogs));
  dispatch(setSubBreeds(subBreeds));

  dispatch(stopLoading());
};

export const onFetchMore = () => async (dispatch, getState) => {
  const state = getState();
  const { breedDogs, breed } = state.dog.breed.details;
  const newDogsBreeds = await BreedsDataService.getRandomDogByBreed(breed.name, 12);

  dispatch(setBreedDogs([
    ...breedDogs,
    ...newDogsBreeds,
  ]));
};
