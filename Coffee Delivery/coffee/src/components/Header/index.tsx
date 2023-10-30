import { HeaderContainer } from './styles'
import logoCoffee from '../../assets/logoCafe.svg'
import { NavLink } from 'react-router-dom'
import { CartButton, LocationButton } from '../Button'
import { useContext } from "react"
import { OrderFormContext } from '../../contexts/OrderFormContext'



export function Header() {
    const { itemData } = useContext(OrderFormContext);
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
                    <div>
                        <CartButton />
                        <p>{itemData.length}</p>
                    </div>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}