import { TYPE } from '../template.types';
import { showMessage } from '../template.thunk';

import { SNACKBAR_STATUS, SNACKBAR_TIMEOUT } from '../../../constants/snackbar';

describe('Thunk Template Snackbar', () => {
  test('showMessage', () => {
    const dispatch = jest.fn();
    const payload = {
      status: SNACKBAR_STATUS.INFO,
      message: 'test',
      description: 'description for test',
    };

    showMessage(payload)(dispatch);

    expect(dispatch).toBeCalledWith({
      type: TYPE.SNACKBAR.SET_CONTENT,
      payload,
    });

    expect(dispatch).toBeCalledWith({
      type: TYPE.SNACKBAR.SET_ACTIVE,
      payload: true,
    });

    setTimeout(() => {
      expect(dispatch).toBeCalledWith({
        type: TYPE.SNACKBAR.SET_ACTIVE,
        payload: false,
      });
    }, SNACKBAR_TIMEOUT);
  });
});
