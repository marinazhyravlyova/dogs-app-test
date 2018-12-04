import {
  container as BreedDetails,
  fetchDogsData as breedDetailsFetchDogsData,
} from './client/dog/breed/details';
import {
  container as BreedMainContainer,
  fetchDogsData as breedMainFetchDogsData,
} from './client/dog/breed/main';

export default [{
  type: 'route',
  path: '/dogs/breed/:breedName',
  component: BreedDetails,
  setupState: (...params) => async (dispatch, getState) => breedDetailsFetchDogsData(...params)(dispatch, getState),
}, {
  type: 'route',
  path: '/dogs/breeds',
  component: BreedMainContainer,
  setupState: (...params) => async (dispatch, getState) => breedMainFetchDogsData(...params)(dispatch, getState),
}, {
  type: 'redirect',
  from: '/',
  to: '/dogs/breeds',
}];
