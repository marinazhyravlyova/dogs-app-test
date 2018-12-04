import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { component as BreedDogsList } from '../list';

export const BreedName = styled.div`
  margin: 20px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.5);
  font-family: Arial, Helvetica, sans-serif
`;

export const SubBreed = styled.div`
  margin: 0 40px;
  display: flex;
  align-items: center;
`;

export const SubBreedTitle = styled.div`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const SubBreedList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SubBreedItem = styled.div`
  margin: 5px;
  padding: 5px;
  font-size: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  fontFamily: Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

class DogsBreeds extends Component {
  componentDidMount() {
    const { params: { breedName } } = this.props.match;

    this.props.onFetchData({ breedName });
  }

  render() {
    const {
      breed,
      breedDogs,
      subBreeds,
      onFetchMore,
    } = this.props;
    const breedName = breed && breed.name;

    return (
      <div>
        <BreedName>{breedName}</BreedName>
        {(() => {
          if (subBreeds.length > 0) {
            return (
              <SubBreed>
                <SubBreedTitle>Sub breeds:</SubBreedTitle>
                <SubBreedList>
                  {(subBreeds || []).map((subBreed, key) => (
                    <SubBreedItem key={key}>
                      {subBreed.name}
                    </SubBreedItem>
                  ))}
                </SubBreedList>
              </SubBreed>
            );
          }

          return null;
        })()}
        <BreedDogsList
          breedDogs={breedDogs}
          onFetchMore={onFetchMore}
        />
      </div>
    );
  }
}

DogsBreeds.propTypes = {
  loading: PropTypes.bool,
  match: PropTypes.object,
  breed: PropTypes.object,
  subBreeds: PropTypes.array,
  breedDogs: PropTypes.array,
  onBreedClick: PropTypes.func,
  onFetchData: PropTypes.func,
  onFetchMore: PropTypes.func,
};

export default DogsBreeds;
