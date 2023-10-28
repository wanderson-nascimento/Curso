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
                console.log('action dentro do reducer, a o index é', action.payload.coffeeItem, 'E a quantidade é ', action.payload.quantity)
                if (action.payload.quantity !== 1) {
                    console.log('A quantidade é difernete de 1', action.payload.quantity)
                    draft.itemData[action.payload.coffeeItem].quantity = action.payload.quantity
                } else {
                    console.log('A quantidade é 1', action.payload.quantity);
                        draft.itemData[action.payload.coffeeItem].quantity += 1;
                }
            })

        case ActionTypes.REMOVE_COFFEE:
            return produce(state, (draft) => {
                draft.itemData.splice(action.payload.coffeeItemId, 1)
            })

        case ActionTypes.UPDATE_TOTAL:
            return produce(state, (draft) => {
                const total = state.itemData.reduce(
                    (accumulator, currentItem) => {
                        if (!currentItem.price) {
                            return accumulator;
                        }
                        return accumulator + (parseFloat(currentItem.price.replace(',', '.'))*currentItem.quantity);
                    }, 0)
                draft.totalizer = parseFloat(total.toFixed(2));
            })

        default:
            return state
    }
}