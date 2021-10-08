import  {combineReducers } from 'redux';
import { productReducer } from './productReducer.js';

const reducers = combineReducers({
  allproducts:productReducer
})

export default reducers
