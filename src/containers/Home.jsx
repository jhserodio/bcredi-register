import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Home } from '../pages/Home/Home';
import * as actions from '../redux/form/form.actions';
import { submitForm } from '../redux/form/form.thunk';

const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch),
  submit: () => dispatch(submitForm()),
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export { HomeContainer };
