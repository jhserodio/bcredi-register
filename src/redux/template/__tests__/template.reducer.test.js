import { assocPath } from 'ramda';

import { TYPE } from '../template.types';
import { templateReducer as reducer } from '../template.reducer';
import { initialState } from '../template.initial';

import { SNACKBAR_STATUS } from '../../../constants/snackbar';

describe('Reducer Template Snackbar', () => {
  test(`${TYPE.SNACKBAR.SET_CONTENT} expect ${SNACKBAR_STATUS.INFO}`, () => {
    const content = {
      status: SNACKBAR_STATUS.INFO,
      message: 'test',
      description: 'description for test',
    };

    const action = {
      type: TYPE.SNACKBAR.SET_CONTENT,
      payload: content,
    };

    expect(reducer(initialState, action)).toEqual(
      assocPath(['snackbar', 'content'], action.payload, initialState),
    );
  });

  test(`${TYPE.SNACKBAR.SET_CONTENT} expect ${SNACKBAR_STATUS.ERROR}`, () => {
    const content = {
      status: SNACKBAR_STATUS.ERROR,
      message: 'test',
      description: 'description for test',
    };

    const action = {
      type: TYPE.SNACKBAR.SET_CONTENT,
      payload: content,
    };

    expect(reducer(initialState, action)).toEqual(
      assocPath(['snackbar', 'content'], action.payload, initialState),
    );
  });

  test(`${TYPE.SNACKBAR.SET_CONTENT} expect ${SNACKBAR_STATUS.OK}`, () => {
    const content = {
      status: SNACKBAR_STATUS.OK,
      message: 'test',
      description: 'description for test',
    };

    const action = {
      type: TYPE.SNACKBAR.SET_CONTENT,
      payload: content,
    };

    expect(reducer(initialState, action)).toEqual(
      assocPath(['snackbar', 'content'], action.payload, initialState),
    );
  });

  test(TYPE.SNACKBAR.SET_ACTIVE, () => {
    const action = {
      type: TYPE.SNACKBAR.SET_ACTIVE,
      payload: true,
    };

    expect(reducer(initialState, action)).toEqual(
      assocPath(['snackbar', 'active'], action.payload, initialState),
    );
  });
});
