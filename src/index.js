import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, storePlusMinus } from './store';


// const render = () => {ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// }
// render()

// store.subscribe(render)
// storePlusMinus.subscribe(render)

import {Provider} from 'react-redux';
ReactDOM.render(
  <Provider store={store} storePlusMinus={storePlusMinus}>
    <App />
  </Provider>,
  document.getElementById('root'))




reportWebVitals();
