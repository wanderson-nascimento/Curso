import { CoffeeCardContainer, CoffeeTypes, CoffeeCardFooter } from "./styles"
import coffeeIcon from '../../assets/Coffee1.svg'
import {IncrementButton,IconButton } from "../Button/index"

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src={coffeeIcon}></img>
            <CoffeeTypes>
                <p>Tradicional</p>
            </CoffeeTypes>
            <h3>Expresso Tradicional</h3>
            <span>O tradicional café feito com água quente e grãos moídos</span>
            <CoffeeCardFooter>
                <p>R$ 9,90</p>
                <IncrementButton/>
                <IconButton/>
            </CoffeeCardFooter>
            
        </CoffeeCardContainer>
    )
}