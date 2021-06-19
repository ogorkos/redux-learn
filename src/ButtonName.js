import React from 'react';
import { store } from './store';
import {setName} from './actions/index'

const ButtonName = ({names}) => {
   
   function dispatchBtnAction(e){
      const name = e.target.dataset.name
      console.log(name)
      store.dispatch(setName(name))
   }
   return (
      <div>
         {names.map((name,i) => <button key={i} data-name={name} onClick={dispatchBtnAction}> {name} </button>)}
      </div>
   )
}

export default ButtonName