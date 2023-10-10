import { IncrementButtonStyle, IconButtonContainer } from "./styles";
import { Plus, Minus, ShoppingCartSimple  } from '@phosphor-icons/react'

export function IncrementButton() {
    return (
        <IncrementButtonStyle $secondary>
            <button><Minus size={14} /></button>
            <span>1</span>
            <button><Plus size={14} /></button>
        </IncrementButtonStyle>
    )
}

export function IconButton() {
    return (
        <IconButtonContainer>
            <ShoppingCartSimple size={22}/>
        </IconButtonContainer>
    )
}