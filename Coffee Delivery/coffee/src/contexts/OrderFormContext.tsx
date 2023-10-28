import { createContext, useState, ReactNode, useReducer, useEffect } from "react"
import { addCoffeeAction, updateCoffeeAction, removeCoffeeAction, updateTotalizerAction } from "../reducers/actions"
import { orderFormReducer } from "../reducers/reducers"

export interface ItemsDataType {
    id: number | null
    name: string | null
    img: string | undefined
    label: string[]
    description: string | null
    price: string | null
    quantity: number 
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
    totalizer: number ;
    addNewCoffee: (data: ItemsDataType, quantity: number) => void;
    updateCoffeQuantity: (data: number, quantity: number) => void;
    removeCoffee: (data: number) => void;
    updateTotalizer: () => void;
}

export const OrderFormContext = createContext({} as OrderFormContextType)

interface OrderFormContextProviderProps {
    children: ReactNode
}





export function OrderFormContextProvider({ children }: OrderFormContextProviderProps) {
    const [profileData, setProfileData] = useState<ProfileDataType[]>([])
    const [paymentData, setPaymentData] = useState(null)
    const [totalizer, setTotalizer] = useState(0)

    const [orderFormState, dispatch] = useReducer(orderFormReducer, {
        profileData: [],
        paymentData: null,
        itemData: [],
        totalizer: 0,
        addNewCoffee,
        updateCoffeQuantity,
        removeCoffee,
        updateTotalizer,
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
        updateTotalizer();
        console.log(orderFormState);
    }, [orderFormState])

    const { itemData } = orderFormState


    function addNewCoffee(data: ItemsDataType, quantity: number) {
        const newCoffeeToAdd: ItemsDataType = {
            id: data.id,
            name: data.name,
            img: data.img,
            label: data.label,
            description: data.description,
            price: data.price,
            quantity: data.quantity
        }
        dispatch(addCoffeeAction(newCoffeeToAdd, quantity))
    }

    function updateCoffeQuantity(itemToUpdate: number, quantity: number) {
        console.log('função dentro do contexto')
        dispatch(updateCoffeeAction(itemToUpdate, quantity))
    }

    function removeCoffee(itemToUpdate: number) {
        dispatch(removeCoffeeAction(itemToUpdate))
    }

    function updateTotalizer() {
        dispatch(updateTotalizerAction())
    }


    return (
        <OrderFormContext.Provider
            value={{
                profileData,
                paymentData,
                itemData,
                totalizer,
                addNewCoffee,
                updateCoffeQuantity,
                removeCoffee,
                updateTotalizer,
            }}
        >
            {children}
        </OrderFormContext.Provider>
    )
}