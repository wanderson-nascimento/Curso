import { ItemsDataType } from '../contexts/OrderFormContext'

export enum ActionTypes{
    ADD_COFFEE = 'ADD_COFFE',
    INCREMENT_COFFEE = 'INCREMENT_COFFE',
    DECREMENT_COFFEE = 'DECREMENT_COFFE',
    REMOVE_COFFEE = 'REMOVE_COFFE', 
}

export function addCoffee(coffeeItem:ItemsDataType){
    return{
        type: ActionTypes.ADD_COFFEE,
        payload:{
            coffeeItem
        }
    }
}