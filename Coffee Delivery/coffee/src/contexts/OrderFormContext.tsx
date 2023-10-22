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
    itemData: ItemsDataType[];
    addNewCoffeeType: (data: ItemsDataType) => void
    // createNewCycle: (data: ItemsDataType) => void;
}

export const OrderFormContext = createContext({} as OrderFormContextType)

interface OrderFormContextProviderProps{
    children: ReactNode
}




export function OrderFormContextProvider({ children }:OrderFormContextProviderProps) {
    // const [itemsData, setItemsData] = useState<ItemsDataType[]>([])
    const [profileData, setProfileData] = useState<ProfileDataType[]>([])
    const [paymentData, setPaymentData] = useState(null)

    const [orderFormState, dispatch] = useReducer(orderFormReducer, {
        profileData: [],
        paymentData: null,    
        itemData: [],
        addNewCoffeeType
    })

    const {itemData} = orderFormState


    function addNewCoffeeType(data: ItemsDataType){
        const newCoffeeToAdd:ItemsDataType = {
                id: data.id,
                name: data.name,
                img: data.img,
                label: data.label,
                description: data.description,
                price: data.price,
              }
              dispatch(addCoffee(newCoffeeToAdd))
            }

    return (
        <OrderFormContext.Provider
        value={{
            profileData,
            paymentData,
            itemData,
            addNewCoffeeType,
            // createNewCycle
          }}
        >
            {children}
        </OrderFormContext.Provider>
    )
}