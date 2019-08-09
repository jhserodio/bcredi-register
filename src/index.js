import React from 'react';
import ReactDOM from 'react-dom';
import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { flattenMessages } from './utils/flattenMessages';
import { messages } from './messages';

import { Header } from './template/Header/Header';
import { Main } from './template/Main/Main';
import { SnackbarContainer } from './containers/Snackbar';

import './index.css';
import { Banner } from './template/Banner/Banner';

addLocaleData([...pt, ...en]);

const locale =
  navigator.language ||
  navigator.userLanguage ||
  (navigator.languages && navigator.languages[0]) ||
  'pt-BR';

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <div className="sidebar">
              <Banner />
            </div>
            <div className="content">
              <Header />
              <SnackbarContainer />
              <Main />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </IntlProvider>,
  document.getElementById('root'),
);
