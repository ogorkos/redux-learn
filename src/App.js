import './App.css';
import HelloWord from './HelloWord'
// import { useState } from 'react';
import {store} from './store'
import ButtonName from './ButtonName'
import PlusMinus from './PlusMinus'
// const arr =[1,2,3,4]


const App = () => {
  // const [name, setName] = useState('Kostya')
  return (
    <div className="App">
      <h1>Redux</h1>
      {/* <p>{arr.reduce((t,it) => t+it,0)}</p> */}
      {/* <HelloWord name = {name}/> */}
    
      <HelloWord name = {store.getState().name}/>
      <ButtonName names = {['Nir', 'Kostya', 'Alexey', 'Sammer', 'Dima']} />
      <PlusMinus/>
    </div>
  );
}

export default App;
