import { snackbarSetActive, snackbarSetContent } from '../template.actions';

import { TYPE } from '../template.types';
import { SNACKBAR_STATUS } from '../../../constants/snackbar';

describe('Actions Template Snackbar', () => {
  test(`snackbarSetContent expect status ${SNACKBAR_STATUS.INFO}`, () => {
    const content = {
      status: SNACKBAR_STATUS.INFO,
      message: 'test',
      description: 'description for test',
    };

    const result = {
      type: TYPE.SNACKBAR.SET_CONTENT,
      payload: content,
    };

    expect(snackbarSetContent(content)).toEqual(result);
  });

  test(`snackbarSetContent expect status ${SNACKBAR_STATUS.ERROR}`, () => {
    const content = {
      status: SNACKBAR_STATUS.ERROR,
      message: 'test',
      description: 'description for test',
    };

    const result = {
      type: TYPE.SNACKBAR.SET_CONTENT,
      payload: content,
    };

    expect(snackbarSetContent(content)).toEqual(result);
  });

  test(`snackbarSetContent expect status ${SNACKBAR_STATUS.OK}`, () => {
    const content = {
      status: SNACKBAR_STATUS.OK,
      message: 'test',
      description: 'description for test',
    };

    const result = {
      type: TYPE.SNACKBAR.SET_CONTENT,
      payload: content,
    };

    expect(snackbarSetContent(content)).toEqual(result);
  });

  test('snackbarSetActive', () => {
    const result = {
      type: TYPE.SNACKBAR.SET_ACTIVE,
      payload: true,
    };

    expect(snackbarSetActive(true)).toEqual(result);
  });
});
