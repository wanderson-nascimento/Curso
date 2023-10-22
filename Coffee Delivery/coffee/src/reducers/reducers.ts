import {produce} from 'immer'
import { ActionTypes } from './actions';
import {OrderFormContextType} from '../contexts/OrderFormContext'



export function orderFormReducer(state: OrderFormContextType, action:any){
    switch(action.type){
        case ActionTypes.ADD_COFFEE:
            return produce(state, (draft) => {
                draft.itemData.push(action.payload.coffeeItem)
            })
        default:
            return state                        
    }   
}