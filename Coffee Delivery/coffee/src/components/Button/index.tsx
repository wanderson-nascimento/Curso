import { IncrementButtonStyle, RemoveButtonStyle, IconButtonContainer, CartButtonContainer } from "./styles";
import { Plus, Minus, ShoppingCartSimple, Trash } from '@phosphor-icons/react'

interface IncrementButtonProps {
    coffeeQuantity: number,
    handleMinus: () => void,
    handlePlus: () => void
}

interface RemoveButtonProps {
    handleRemoveCoffee: () => void
}

export function IncrementButton(coffeQuantityData: IncrementButtonProps) {

    return (
        <IncrementButtonStyle>
            <button onClick={coffeQuantityData.handleMinus}><Minus size={14} /></button>
            <span>{coffeQuantityData.coffeeQuantity}</span>
            <button onClick={coffeQuantityData.handlePlus}><Plus size={14} /></button>
        </IncrementButtonStyle>
    )
}

export function IconButton() {
    return (
        <IconButtonContainer>
            <ShoppingCartSimple size={22} weight="fill" />
        </IconButtonContainer>
    )
}


export function CartButton() {
    return (
        <CartButtonContainer $primary>
            <ShoppingCartSimple size={22} weight="fill" />
        </CartButtonContainer>
    )
}



export function RemoveButton(data:RemoveButtonProps) {
    return (
        <RemoveButtonStyle onClick={data.handleRemoveCoffee}>
                <Trash size={16} />
                <p>REMOVER</p>
        </RemoveButtonStyle>
    )
}
