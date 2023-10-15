import { HeaderContainer } from './styles'
import { ShoppingCart, MapPinLine } from '@phosphor-icons/react'


import logoCoffee from '../../assets/logoCafe.svg'

import { NavLink } from 'react-router-dom'
import { CartButton, LocationButton } from '../Button'

export function Header() {
    return (
        <HeaderContainer>
            <span>
                <img src={logoCoffee} alt="" />
            </span>
            <nav>
                <NavLink to="/" title="Home">
                    <LocationButton />
                </NavLink>
                <NavLink to="/checkout" title="Checkout">
                    <CartButton/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}