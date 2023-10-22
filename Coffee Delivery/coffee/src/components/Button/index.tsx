import { useState } from "react";
import { IncrementButtonStyle, PlaceOrderButtonContainer, RemoveButtonStyle, IconButtonContainer, LocationButtonContainer, CartButtonContainer } from "./styles";
import { Plus, Minus, ShoppingCartSimple, MapPin, Trash } from '@phosphor-icons/react'

export function IncrementButton() {
    const [coffeeQuantiy, setCoffeeQuantity] = useState(1)

    function handlePlus() {
        setCoffeeQuantity(prevCoffeeQuantity => prevCoffeeQuantity + 1)
    }

    function handleMinus() {
        if (coffeeQuantiy > 0) {
            setCoffeeQuantity(prevCoffeeQuantity => prevCoffeeQuantity - 1)
        }
    }

    return (
        <IncrementButtonStyle $secondary>
            <button onClick={handleMinus}><Minus size={14} /></button>
            <span>{coffeeQuantiy}</span>
            <button onClick={handlePlus}><Plus size={14} /></button>
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

export function LocationButton() {
    return (
        <LocationButtonContainer>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationButtonContainer>
    )
}

export function CartButton() {
    return (
        <CartButtonContainer $primary>
            <ShoppingCartSimple size={22} weight="fill" />
        </CartButtonContainer>
    )
}

export function IncrementChekoutButton() {
    return (
        <IncrementButtonStyle $secondary>
            <button><Minus size={14} /></button>
            <span>1</span>
            <button><Plus size={14} /></button>
        </IncrementButtonStyle>
    )
}

export function RemoveButton() {
    return (
        <RemoveButtonStyle $secondary>
            <Trash size={16} />
            <p>REMOVER</p>
        </RemoveButtonStyle>
    )
}



export function PlaceOrderButton() {
    return (
        <PlaceOrderButtonContainer>
            <p>Confirmar pedido</p>
        </PlaceOrderButtonContainer>
    )
}