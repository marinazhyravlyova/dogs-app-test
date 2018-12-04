import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const BreedsSelectContainer = styled.div`
  align-items: center;
  position: relative;
  margin: 0 40px;
`;

export const Breeds = styled.div`
  top: 57px;
  position: absolute;
  width: 100%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: scroll;
  border-radius: 0 0 5px 5px;
`;

export const Breed = styled.div`
  padding: 0 15px;
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  outline: none;
  font-size: 25px;
  padding: 3px 15px;
  height: 50px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

export const DEFAULT_ITEMS_TO_SHOW = 8;

class BreedsSelect extends Component {
  state = {
    searchQuery: '',
    showList: false,
  };

  onSearchQueryChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
      showList: true,
    });
  };

  getFilteredBreeds = (breeds, searchQuery, itemsToShow = DEFAULT_ITEMS_TO_SHOW) => {
    const filteredItems = (breeds || []).filter(({ name }) => (name || '').toLowerCase().indexOf((searchQuery || '').toLowerCase()) !== -1);
    const filteredItemsLength = filteredItems.length;

    return (filteredItems || []).slice(0, filteredItemsLength > itemsToShow ? itemsToShow : filteredItemsLength);
  };

  onBreedClick = (breed) => {
    this.setState({
      showList: false,
      searchQuery: breed.name,
    });

    this.props.onBreedClick(breed);
  };

  onBackgroundClick = () => {
    this.setState({ showList: false });
  };

  onInputClick = () => {
    this.setState({ showList: true });
  };

  render() {
    const { breeds } = this.props;
    const { searchQuery, showList } = this.state;
    const filteredBreeds = this.getFilteredBreeds(breeds, searchQuery);

    return (
      <Fragment>
        {(() => {
          if (showList) {
            return (
              <Background onClick={this.onBackgroundClick}/>
            );
          }

          return null;
        })()}
        <BreedsSelectContainer>
          <SearchInput
            placeholder='Type a breed'
            value={searchQuery}
            onClick={this.onInputClick}
            onChange={this.onSearchQueryChange}
          />
          {(() => {
            if (showList) {
              return (
                <Breeds>
                  {(filteredBreeds || []).map((breed, key) => (
                    <Breed key={key} onClick={() => this.onBreedClick(breed)}>
                      {breed.name} {breed.subBreeds.length
                        ? `(${breed.subBreeds.length})`
                        : null}
                    </Breed>
                  ))}
                </Breeds>
              );
            }

            return null;
          })()}
        </BreedsSelectContainer>
      </Fragment>
    );
  }
}

BreedsSelect.propTypes = {
  breeds: PropTypes.array,
  selectedBreed: PropTypes.object,
  onBreedClick: PropTypes.func,
};

export default BreedsSelect;
