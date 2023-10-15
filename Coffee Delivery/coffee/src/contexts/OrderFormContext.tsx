import { createContext, useState, ReactNode } from "react"

interface ItemsDataType {
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



interface OrderFormContextType {
    profileData: ProfileDataType[] | null;
    paymentData: string | null;
    itemsData: ItemsDataType[] | null;
}

export const OrderFormContext = createContext({} as OrderFormContextType)

interface OrderFormContextProviderProps{
    children: ReactNode
}


export function OrderFormContextProvider({ children }:OrderFormContextProviderProps) {
    const [itemsData, setItemsData] = useState<ItemsDataType[]>([])
    const [profileData, setProfileData] = useState<ProfileDataType[]>([])
    const [paymentData, setPaymentData] = useState(null)

    return (
        <OrderFormContext.Provider
        value={{
            profileData,
            paymentData,
            itemsData
          }}
        >
            {children}
        </OrderFormContext.Provider>
    )
}