import { connect } from 'react-redux';
import { snackbarSetActive } from '../redux/template/template.actions';
import { Snackbar } from '../template/Snackbar/Snackbar';

const mapStateToProps = state => ({
  ...state.template.snackbar,
});

const mapDispatchToProps = dispatch => ({
  snackbarSetActive: active => dispatch(snackbarSetActive(active)),
});

const SnackbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Snackbar);

export { SnackbarContainer };
