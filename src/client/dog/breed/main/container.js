import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchDogsData, fetchDogs, goToBreedDetailsPage, selectBreed } from './actions';
import DogsBreeds from './component';

export const mapStateToProps = state => ({
  loading: state.dog.breed.main.loading,
  breeds: state.dog.breed.main.breeds,
  selectedBreed: state.dog.breed.main.selectedBreed,
  selectedBreedDogs: state.dog.breed.main.selectedBreedDogs,
});

export const mapDispatchToProps = dispatch => ({
  onFetchData: (...args) => dispatch(fetchDogsData(...args)),
  onFetchMore: (...args) => dispatch(fetchDogs(...args)),
  onBreedClick: (...args) => dispatch(selectBreed(...args)),
  onBreedDetailsClick: (...args) => dispatch(goToBreedDetailsPage(...args)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DogsBreeds),
);
