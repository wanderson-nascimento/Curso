import { createContext, useState, ReactNode, useReducer, useEffect } from "react"
import { addCoffeeAction, updateCoffeeAction, removeCoffeeAction } from "../reducers/actions"
import { orderFormReducer } from "../reducers/reducers"

export interface ItemsDataType {
    id: number | null
    name: string | null
    img: string | undefined
    label: string[]
    description: string | null
    price: string | null
    quantity?: number | null
}

export interface ItemsDataProps {
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
    addNewCoffeeType: (data: ItemsDataType, quantity: number) => void;
    updateCoffeQuantity: (data: number, quantity: number) => void;
    removeCoffee: (data: number) => void;
}

export const OrderFormContext = createContext({} as OrderFormContextType)

interface OrderFormContextProviderProps {
    children: ReactNode
}





export function OrderFormContextProvider({ children }: OrderFormContextProviderProps) {
    const [profileData, setProfileData] = useState<ProfileDataType[]>([])
    const [paymentData, setPaymentData] = useState(null)

    const [orderFormState, dispatch] = useReducer(orderFormReducer, {
        profileData: [],
        paymentData: null,
        itemData: [],
        addNewCoffeeType,
        updateCoffeQuantity,
        removeCoffee
    },
        (initialState) => {
            const storedStateAsJSON = localStorage.getItem(
                '@ignite-timer:orderFormes-state-1.0.0',
            )

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON)
            }

            return initialState
        },
    )

    useEffect(() => {
        console.log(orderFormState)
    }, [orderFormState])

    const { itemData } = orderFormState


    function addNewCoffeeType(data: ItemsDataType, quantity: number) {
        const newCoffeeToAdd: ItemsDataType = {
            id: data.id,
            name: data.name,
            img: data.img,
            label: data.label,
            description: data.description,
            price: data.price
        }
        dispatch(addCoffeeAction(newCoffeeToAdd, quantity))
    }

    function updateCoffeQuantity(itemToUpdate: number, quantity: number) {
        dispatch(updateCoffeeAction(itemToUpdate, quantity))
    }

    function removeCoffee(itemToUpdate: number) {
        dispatch(removeCoffeeAction(itemToUpdate))
    }

    return (
        <OrderFormContext.Provider
            value={{
                profileData,
                paymentData,
                itemData,
                addNewCoffeeType,
                updateCoffeQuantity,
                removeCoffee
            }}
        >
            {children}
        </OrderFormContext.Provider>
    )
}