import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/layout/App";
import registerServiceWorker from "./registerServiceWorker";
import { IntlProvider } from "react-intl";
import { store } from "./store";

import "./styles/index.css";
import "./libs";

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </Provider>,

  document.getElementById("root")
);

registerServiceWorker();
