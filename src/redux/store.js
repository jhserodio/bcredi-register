import { configureStore } from 'redux-starter-kit';

import { middleware } from './middleware';
import { reducer } from './reducer';

const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

export { store };
