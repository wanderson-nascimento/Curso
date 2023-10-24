import { ItemsDataType } from '../contexts/OrderFormContext'

export enum ActionTypes{
    ADD_COFFEE = 'ADD_COFFEE',
    UPDATE_COFFEE = 'UPDATE_COFFEE',
    DECREMENT_COFFEE = 'DECREMENT_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE', 
}

export function addCoffeeAction(coffeeItem:ItemsDataType, quantity:number){
    return{
        type: ActionTypes.ADD_COFFEE,
        payload:{
            coffeeItem,
            quantity
        }
    }
}

export function updateCoffeeAction(coffeeItem:number, quantity:number){
    return{
        type: ActionTypes.UPDATE_COFFEE,
        payload:{
            coffeeItem,
            quantity
        }
    }
}

export function removeCoffeeAction(coffeeItem:number){
    return{
        type: ActionTypes.UPDATE_COFFEE,
        payload:{
            coffeeItem
        }
    }
}