import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const BreedListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const BreedName = styled.div`
  margin-left: 20px;
  text-decoration: none;
  font-size: 28px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.5);
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
`;

export const DogImage = styled.img`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 250px;
`;

class BreedListItem extends Component {
  render() {
    const {
      breedDog,
      showName,
      onClick,
    } = this.props;
    const breedName = breedDog.breed.name;

    return (
      <BreedListItemContainer onClick={onClick}>
        { showName ? <BreedName>{breedName}</BreedName> : null }
        <DogImage src={breedDog.imageUrl}/>
      </BreedListItemContainer>
    );
  }
}

BreedListItem.propTypes = {
  showName: PropTypes.bool,
  breedDog: PropTypes.object,
  onClick: PropTypes.func,
};

export default BreedListItem;
