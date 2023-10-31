import { ItemsDataType } from '../contexts/OrderFormContext'

export enum ActionTypes {
    ADD_COFFEE = 'ADD_COFFEE',
    UPDATE_COFFEE = 'UPDATE_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    UPDATE_TOTAL = 'UPDATE_TOTAL',
    ADD_PAYMENT = 'ADD_PAYMENT'

}

export function addCoffeeAction(coffeeItem: ItemsDataType, quantity: number) {
    return {
        type: ActionTypes.ADD_COFFEE,
        payload: {
            coffeeItem,
            quantity
        }
    }
}

export function updateCoffeeAction(coffeeItemId: number, quantity: number) {
    return {
        type: ActionTypes.UPDATE_COFFEE,
        payload: {
            coffeeItemId,
            quantity
        }
    }
}

export function removeCoffeeAction(coffeeItemId: number) {
    return {
        type: ActionTypes.REMOVE_COFFEE,
        payload: {
            coffeeItemId
        }
    }
}

export function updateTotalizerAction() {
    return {
        type: ActionTypes.UPDATE_TOTAL
    }
}

export function addPaymentAction(paymentMethod: string) {
    return {
        type: ActionTypes.ADD_PAYMENT,
        payload: {
            paymentMethod
        }
    }
}