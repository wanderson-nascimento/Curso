import { HeaderContainer } from './styles'
import { ShoppingCart, MapPinLine } from '@phosphor-icons/react'


import logoCoffee from '../../assets/logoCafe.svg'

import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <span>
                <img src={logoCoffee} alt="" />
            </span>
            <nav>
                <NavLink to="/" title="Home">
                    <MapPinLine size={24} /> Porto Alegre, RS
                </NavLink>
                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}