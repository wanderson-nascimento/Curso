import { produce } from 'immer'
import { ActionTypes } from './actions';
import { OrderFormContextType } from '../contexts/OrderFormContext'



export function orderFormReducer(state: OrderFormContextType, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_COFFEE:
            return produce(state, (draft) => {
                const coffeeWithQuantity = {
                    ...action.payload.coffeeItem,
                    quantity: action.payload.quantity
                };
                draft.itemData.push(coffeeWithQuantity)
            })

        case ActionTypes.UPDATE_COFFEE:
            return produce(state, (draft) => {
                draft.itemData[action.payload.coffeeItem].quantity = action.payload.quantity
            })

        case ActionTypes.REMOVE_COFFEE:
            return produce(state, (draft) => {
                draft.itemData.splice(action.payload.coffeeItemId, 1)
            })

        default:
            return state
    }
}