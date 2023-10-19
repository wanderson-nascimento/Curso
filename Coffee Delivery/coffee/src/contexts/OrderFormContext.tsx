import { createContext, useState, ReactNode, useReducer } from "react"
import { addCoffee } from "../reducers/actions"
import {orderFormReducer} from "../reducers/reducers"

export interface ItemsDataType {
    id: number | null
    name: string | null
    img: string | undefined
    label: string[]
    description: string | null
    price: string | null
}

export interface ItemsDataProps{
    item: ItemsDataType
}

interface ProfileDataType {
    cep: string | null
    rua: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
}



export interface OrderFormContextType {
    profileData: ProfileDataType[] | null;
    paymentData: string | null;
    itemsData: ItemsDataType[];
    // createNewCycle: (data: ItemsDataType) => void;
}

export const OrderFormContext = createContext({} as OrderFormContextType)

interface OrderFormContextProviderProps{
    children: ReactNode
}




export function OrderFormContextProvider({ children }:OrderFormContextProviderProps) {
    const [itemsData, setItemsData] = useState<ItemsDataType[]>([])
    const [profileData, setProfileData] = useState<ProfileDataType[]>([])
    const [paymentData, setPaymentData] = useState(null)

    // const [itemsDataState, dispatch] = useReducer(orderFormReducer,
    //     {

    //     })

    // function addNewCoffeeType(data: ItemsDataType){

    //     const newCoffee: Coffee = {

    //     }

    //     dispatch(addCoffee(newCoffee))
    // }

    return (
        <OrderFormContext.Provider
        value={{
            profileData,
            paymentData,
            itemsData,
            // createNewCycle
          }}
        >
            {children}
        </OrderFormContext.Provider>
    )
}