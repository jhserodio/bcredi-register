import { SNACKBAR_STATUS } from '../../constants/snackbar';

const initialState = {
  snackbar: {
    content: {
      status: SNACKBAR_STATUS.OK,
      message: 'default',
      description: 'any default message',
    },
    active: false,
  },
};

export { initialState };
