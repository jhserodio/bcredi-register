import { templateReducer } from './template/template.reducer';
import { formReducer } from './form/form.reducer';

const reducer = {
  form: formReducer,
  template: templateReducer,
};

export { reducer };
