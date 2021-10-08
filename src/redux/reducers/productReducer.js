import {ActionTypes} from '../constants/action-type.js'

const initailState = {
  product :[],
}

export const productReducer =(state=initailState,{type,payload})=>{
  switch (type){
    case ActionTypes.SET_PRODUCT:
      return {...state,products:payload}
    default:
    return state
  }

}