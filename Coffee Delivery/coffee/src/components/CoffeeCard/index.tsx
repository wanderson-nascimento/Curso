import { CoffeeCardContainer, CoffeeCardCheckoutFooter, CoffeeTypes, CoffeeCardFooter, CoffeeCardCheckoutContainer } from "./styles"
import expressoTradicional from '../../assets/coffeeImages/expressoTradicional.svg'
import { IncrementButton, IconButton, IncrementChekoutButton, RemoveButton, } from "../Button/index"
import { ItemsDataProps } from '../../contexts/OrderFormContext'


export function CoffeeCard({ item }: ItemsDataProps) {

    return (
        <CoffeeCardContainer>
            <img src={item.img}></img>
            <div>
                {item.label.map((label, index) => (
                    <CoffeeTypes>
                        <p key={index}>{label}</p>
                    </CoffeeTypes>
                ))
                }
            </div>
            <h3>{item.name}</h3>
            <span>{item.description}</span>
            <CoffeeCardFooter>
                <div>
                    <pre>R$ </pre>
                    <p>{item.price}</p>
                </div>
                <div>
                    <IncrementButton />
                    <IconButton />
                </div>
            </CoffeeCardFooter>
        </CoffeeCardContainer>
    )
}

export function CoffeeCardCheckout() {
    return (
        <><hr color="red" />
            <CoffeeCardCheckoutContainer>
                <img src={expressoTradicional} ></img>
                <main>
                    <h3>Expresso Tradicional</h3>
                    <div>
                        <IncrementChekoutButton />
                        <RemoveButton />
                    </div>
                </main>
                <CoffeeCardCheckoutFooter>
                    <div>
                        <p>R$ </p>
                        <p>9,90</p>
                    </div>
                </CoffeeCardCheckoutFooter>

            </CoffeeCardCheckoutContainer>
        </>
    )
}