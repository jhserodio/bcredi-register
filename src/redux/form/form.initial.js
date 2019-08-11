import { FORM, INPUT_TYPE } from '../../constants/form';

const initialState = {
  submiting: false,
  input: {
    [FORM.EMAIL]: {
      value: '',
      dirty: false,
      type: INPUT_TYPE.EMAIL,
      valid: false,
    },
    [FORM.CPF]: {
      value: '',
      dirty: false,
      type: INPUT_TYPE.TEXT,
      valid: false,
    },
    [FORM.BIRTH_DAY]: {
      value: '',
      dirty: false,
      type: INPUT_TYPE.DATE,
      valid: false,
    },
    [FORM.PASSWORD]: {
      value: '',
      dirty: false,
      type: INPUT_TYPE.PASSWORD,
      valid: false,
    },
  },
  policy: false,
};

export { initialState };
