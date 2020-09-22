import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from "./redux/store";
import { App } from './containers';
import './sass/index.scss';

const Application = () => (
    <Provider store={store}>
        <div className="Application">
            <App/>
        </div>
    </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);
