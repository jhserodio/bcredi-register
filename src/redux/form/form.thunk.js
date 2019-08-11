import { inputSetDirty, inputSetValid, setSubmiting } from './form.actions';
import { showMessage } from '../template/template.thunk';
import { SNACKBAR_STATUS } from '../../constants/snackbar';

const submitForm = () => (dispatch, getState) => {
  const { form } = getState();

  dispatch(setSubmiting(true));
  // simular o tempo de uma requisicao
  setTimeout(() => {
    const validates = Object.entries(form.input).map(([key, val]) => ({
      name: key,
      valid: val.dirty && val.valid && val.value,
    }));

    console.log(validates);

    const fieldValidate = validates.every(validate => validate.valid);

    if (fieldValidate && form.policy) {
      dispatch(
        showMessage({
          status: SNACKBAR_STATUS.OK,
          message: 'home.submit.ok.message',
          description: 'home.submit.ok.description',
        }),
      );
    }
    if (!fieldValidate) {
      validates.forEach(validate => {
        if (!validate.valid) {
          dispatch(inputSetDirty({ dirty: true, index: validate.name }));
          dispatch(inputSetValid({ valid: false, index: validate.name }));
        }
      });
    }

    if (!fieldValidate || !form.policy) {
      dispatch(
        showMessage({
          status: SNACKBAR_STATUS.ERROR,
          message: 'home.submit.error.message',
          description: 'home.submit.error.description',
        }),
      );
    }
    dispatch(setSubmiting(false));
  }, 3000);
};

export { submitForm };
