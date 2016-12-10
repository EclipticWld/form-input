import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createStore from './redux/createStore'
import { Provider } from 'react-redux'
injectTapEventPlugin();

const store = createStore();

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
