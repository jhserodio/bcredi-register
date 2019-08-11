import { createReducer } from 'redux-starter-kit';
import { assocPath } from 'ramda';

import { initialState } from './form.initial';
import { TYPE } from './form.types';

const formReducer = createReducer(initialState, {
  [TYPE.SET_SUBMITING]: (state, action) =>
    assocPath(['submiting'], action.payload, state),

  [TYPE.INPUT.SET_VALUE]: (state, action) =>
    assocPath(['input', action.index, 'value'], action.payload, state),

  [TYPE.INPUT.SET_VALID]: (state, action) =>
    assocPath(['input', action.index, 'valid'], action.payload, state),

  [TYPE.INPUT.SET_DIRTY]: (state, action) =>
    assocPath(['input', action.index, 'dirty'], action.payload, state),

  [TYPE.INPUT.SET_TYPE]: (state, action) =>
    assocPath(['input', action.index, 'type'], action.payload, state),

  [TYPE.SET_POLICY]: (state, action) =>
    assocPath(['policy'], action.payload, state),
});

export { formReducer };
