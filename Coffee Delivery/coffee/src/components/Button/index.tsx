import { useState } from "react";
import { IncrementButtonStyle, PlaceOrderButtonContainer, RemoveButtonStyle, IconButtonContainer, LocationButtonContainer, CartButtonContainer } from "./styles";
import { Plus, Minus, ShoppingCartSimple, MapPin, Trash } from '@phosphor-icons/react'

interface IncrementButtonProps {
    coffeeQuantity: number,
    handleMinus: () => void,
    handlePlus: () => void
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
        <IncrementButtonStyle>
            <button><Minus size={14} /></button>
            <span>1</span>
            <button><Plus size={14} /></button>
        </IncrementButtonStyle>
    )
}

export function RemoveButton() {
    return (
        <RemoveButtonStyle>
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