import React from 'react';
import { storePlusMinus } from './store';
import {setPlusMinus} from './actions/index'
import './PlusMinus.css'

const PlusMinus = () => {
   return(
      <div>
         
            <button className="btn plus" data-name='plus' onClick={dispatchAction}>+</button>
            <div className="wind">{storePlusMinus.getState().num}</div>
            <button className="btn minus" data-name='minus' onClick={dispatchAction}>-</button>
   
      </div>
   )
}

function dispatchAction(e) {
   const plusName = e.target.dataset.name
   console.log(setPlusMinus(storePlusMinus.getState().num, plusName));
   storePlusMinus.dispatch(setPlusMinus(storePlusMinus.getState().num, plusName))
}
export default PlusMinus