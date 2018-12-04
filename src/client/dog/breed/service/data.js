import BackendProxy from '../../../service/backendProxy';
import BreedsAdapter from './adapter';

export default class BreedsDataService {
  static async getAllDogsBreeds() {
    const rawBreeds = await BackendProxy.get('breeds/list/all');

    return BreedsAdapter.adaptBreeds(rawBreeds);
  }

  static async getRandomDogs(count = 1) {
    const dogsImages = await BackendProxy.get(`breeds/image/random/${count}`);

    return BreedsAdapter.adaptDogs(dogsImages);
  }

  static async getAllDogsByBreed(breed) {
    const dogsImages = await BackendProxy.get(`breed/${breed}/images`);

    return BreedsAdapter.adaptDogs(dogsImages);
  }

  static async getRandomDogByBreed(breed, count = 1) {
    const dogsImages = await BackendProxy.get(`breed/${breed}/images/random/${count}`);

    return BreedsAdapter.adaptDogs(dogsImages);
  }

  static async getSubBreeds(breed) {
    const subBreeds = await BackendProxy.get(`breed/${breed}/list`);

    return BreedsAdapter.adaptSubBreeds(subBreeds);
  }

  static async getAllDogsBySubBreeds(breed, subBreed) {
    const dogsImages = await BackendProxy.get(`breed/${breed}/${subBreed}/images`);

    return BreedsAdapter.adaptDogs(dogsImages);
  }

  static async getRandomDogBySubBreed(breed, subBreed, count = 1) {
    const dogsImages = await BackendProxy.get(`breed/${breed}/${subBreed}/images/${count}`);

    return BreedsAdapter.adaptDogs(dogsImages);
  }
}
