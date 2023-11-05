import { HeaderContainer, LocationButtonContainer } from './styles'
import logoCoffee from '../../assets/logoCafe.svg'
import { NavLink } from 'react-router-dom'
import { CartButton } from '../Button'
import { useContext } from "react"
import { OrderFormContext } from '../../contexts/OrderFormContext'
import { MapPin } from '@phosphor-icons/react'




export function Header() {
    const { itemData, profileData } = useContext(OrderFormContext);
    return (
        <HeaderContainer>
            <span>
                <img src={logoCoffee} alt="" />
            </span>
            <nav>
                <NavLink to="/" title="Home">
                    <LocationButtonContainer>
                        <MapPin size={22} weight="fill" /> {profileData?.cidade}, {profileData?.uf}
                    </LocationButtonContainer>
                </NavLink>
                <NavLink to="/checkout" title="Checkout">
                    <div>
                        <CartButton />
                        {itemData.length > 0 && <p>{itemData.length}</p>}
                    </div>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}