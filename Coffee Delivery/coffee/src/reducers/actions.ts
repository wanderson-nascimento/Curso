import { ItemsDataType } from '../contexts/OrderFormContext'

export enum ActionTypes{
    ADD_COFFEE = 'ADD_COFFEE',
    UPDATE_COFFEE = 'UPDATE_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE', 
    UPDATE_COFFEE_LIST = 'UPDATE_COFFEE_LIST', 
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

export function removeCoffeeAction(coffeeItemId:number){
    return{
        type: ActionTypes.REMOVE_COFFEE,
        payload:{
            coffeeItemId
        }
    }
}