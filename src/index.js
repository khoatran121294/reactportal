import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/layout/App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';

import { addLocaleData } from 'react-intl';
import ReduxConnectedIntlProvider from './components/common/redux-connected-intl-provider/ReduxConnectedIntlProvider';
import intlEN from 'react-intl/locale-data/en';
import intlVI from 'react-intl/locale-data/vi';
import intlIT from 'react-intl/locale-data/it';

import './styles/index.css';
import './libs';

addLocaleData([...intlEN, ...intlVI, ...intlIT]);

ReactDOM.render(
  <Provider store={store}>
    <ReduxConnectedIntlProvider>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ReduxConnectedIntlProvider>
  </Provider>,

  document.getElementById('root')
);

registerServiceWorker();
