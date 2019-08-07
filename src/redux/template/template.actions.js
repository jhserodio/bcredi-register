import { TYPE } from './template.types';

// SNACKBAR
const snackbarSetContent = ({ status, message, description }) => ({
  type: TYPE.SNACKBAR.SET_CONTENT,
  payload: { status, message, description },
});

const snackbarSetActive = active => ({
  type: TYPE.SNACKBAR.SET_ACTIVE,
  payload: active,
});

export { snackbarSetContent, snackbarSetActive };
