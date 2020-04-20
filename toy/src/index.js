import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Toggle from './components/Toggle';
// import WarnToggle from './components/WarnToggle';
import * as serviceWorker from './serviceWorker';
import ReduxApp from './components/redux_test/ReduxApp';

ReactDOM.render(<ReduxApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
