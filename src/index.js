import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import ThemeDefault from './ThemeDefault'
// import injectTapEventPlugin from 'react-tap-event-plugin'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

// injectTapEventPlugin();

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)
window.store = store

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    // <Provider  store={store}>
    <Provider>
        <MuiThemeProvider muiTheme={ThemeDefault}>
            <App />
            {/* <routes /> */}
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
);
