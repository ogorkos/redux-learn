import {createStore} from 'redux';
import reducer from '../reducers'

const initialState = {name: 'Kostya'}
const initialPlusMinus = {num:0}
export const store =createStore(reducer, initialState)
export const storePlusMinus = createStore(reducer, initialPlusMinus)

