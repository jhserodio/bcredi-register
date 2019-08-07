import { createReducer } from 'redux-starter-kit';
import { assocPath } from 'ramda';

import { initialState } from './template.initial';
import { TYPE } from './template.types';

const templateReducer = createReducer(initialState, {
  [TYPE.SNACKBAR.SET_ACTIVE]: (state, action) =>
    assocPath(['snackbar', 'active'], action.payload, state),

  [TYPE.SNACKBAR.SET_CONTENT]: (state, action) =>
    assocPath(['snackbar', 'content'], action.payload, state),
});

export { templateReducer };
