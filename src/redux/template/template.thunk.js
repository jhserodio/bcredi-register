import { snackbarSetActive, snackbarSetContent } from './template.actions';

const showMessage = ({ status, message, description }) => dispatch => {
  dispatch(snackbarSetContent({ status, message, description }));
  dispatch(snackbarSetActive(true));

  setTimeout(() => {
    dispatch(snackbarSetActive(false));
  }, 6000);
};

export { showMessage };
