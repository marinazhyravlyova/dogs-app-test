import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { component as BreedSelect } from '../select';
import { component as BreedList } from '../list';
import { component as Loading } from '../../../common/loading';

export const DogsBreedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;


class DogsBreeds extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  render() {
    const {
      loading,
      breeds,
      selectedBreed,
      selectedBreedDogs,
      onBreedClick,
      onBreedDetailsClick,
      onFetchMore,
    } = this.props;

    return (
      <DogsBreedsContainer>
        <BreedSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onBreedClick={onBreedClick}
        />
        {(() => {
          if (loading) {
            return <Loading/>;
          }

          return <BreedList
            showName
            breedDogs={selectedBreedDogs}
            onBreedDetailsClick={onBreedDetailsClick}
            onFetchMore={onFetchMore}
          />;
        })()}
      </DogsBreedsContainer>
    );
  }
}

DogsBreeds.propTypes = {
  loading: PropTypes.bool,
  breeds: PropTypes.array,
  selectedBreed: PropTypes.object,
  selectedBreedDogs: PropTypes.array,
  onSelectBreed: PropTypes.func,
  onBreedClick: PropTypes.func,
  onBreedDetailsClick: PropTypes.func,
  onFetchMore: PropTypes.func,
  onFetchData: PropTypes.func,
};

export default DogsBreeds;
