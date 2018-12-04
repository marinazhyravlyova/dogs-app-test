import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchDogsData, onFetchMore, goToSubBreedPage } from './actions';
import BreedDetails from './component';

export const mapStateToProps = state => ({
  loading: state.dog.breed.details.loading,
  breed: state.dog.breed.details.breed,
  breedDogs: state.dog.breed.details.breedDogs,
  subBreeds: state.dog.breed.details.subBreeds,
});

export const mapDispatchToProps = dispatch => ({
  onFetchData: (...args) => dispatch(fetchDogsData(...args)),
  onFetchMore: (...args) => dispatch(onFetchMore(...args)),
  onBreedClick: (...args) => dispatch(goToSubBreedPage(...args)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BreedDetails),
);
