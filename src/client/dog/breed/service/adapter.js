export const dogUrlRegex = /https:\/\/images\.dog\.ceo\/breeds\/(.+)(\/[a-z]+)?\/.+\.jpg/;

export default class BreedAPIAdapter {
  static adaptBreeds(rawBreeds) {
    return Object.keys(rawBreeds || {}).reduce((adaptedBreeds, breedName) => {
      const rowBreed = rawBreeds[breedName];

      return [
        ...adaptedBreeds, {
          name: breedName,
          subBreeds: this.adaptSubBreeds(rowBreed),
        },
      ];
    }, []);
  }

  static adaptSubBreeds(subBreeds) {
    return (subBreeds || []).map(name => ({ name, subBreeds: [] }));
  }

  static adaptDogs(dogImageUrls) {
    if (dogImageUrls === '') {
      return [];
    }

    return (dogImageUrls || []).map((imageUrl) => {
      const matchResult = dogUrlRegex.exec(imageUrl);

      if (matchResult && matchResult.length >= 1) {
        const [, breedName] = matchResult;
        return {
          breed: {
            name: breedName,
          },
          imageUrl,
        };
      }

      return {
        breed: {
          name: '',
        },
        imageUrl,
      };
    });
  }
}
