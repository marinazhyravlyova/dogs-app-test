import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { component as BreedListItem } from './item';
import { component as Loading } from '../../../common/loading';

export const BreedListContainer = styled.div``;

export const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Footer = styled.div`
  width: 100%;
  padding-top: 300px;
`;

class BreedList extends Component {
  componentDidMount() {
    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight) {
        this.props.onFetchMore();
      }
    };
  }

  render() {
    const {
      breedDogs,
      showName,
      onBreedDetailsClick,
    } = this.props;

    return (
      <BreedListContainer>
        <List>
          {(breedDogs || []).map((breedDog, key) => (
            <BreedListItem
              key={key}
              showName={showName}
              breedDog={breedDog}
              onClick={() => onBreedDetailsClick(breedDog.breed)}
            />
          ))}
        </List>
        <Footer>
          <Loading/>
        </Footer>
      </BreedListContainer>
    );
  }
}

BreedList.propTypes = {
  showName: PropTypes.bool,
  breedDogs: PropTypes.array,
  onBreedDetailsClick: PropTypes.func,
  onFetchMore: PropTypes.func,
};

export default BreedList;
