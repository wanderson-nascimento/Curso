import { CoffeeCardContainer, CoffeeCardCheckoutFooter, CoffeeTypes, CoffeeCardFooter, CoffeeCardCheckoutContainer } from "./styles"
import { IncrementButton, IconButton, RemoveButton, } from "../Button/index"
import { ItemsDataProps, ItemsDataType, OrderFormContext } from '../../contexts/OrderFormContext'
import { useContext, useState } from "react"


export function CoffeeCard({ item }: ItemsDataProps) {
    const [coffeeQuantity] = useState(item.quantity ?? 1)
    const { addNewCoffee, itemData, updateCoffeQuantity, removeCoffee } = useContext(OrderFormContext)

    const itemToUpdate = itemData.findIndex(element => element.id === item.id)

    function handlePlus() {
        if (itemToUpdate >= 0) {
            updateCoffeQuantity(itemToUpdate, 1)
        } else addNewCoffee(item, 1)
    }

    function handleMinus() {
        if (itemToUpdate !== -1) {
            if ((itemData[itemToUpdate].quantity ?? 1) > 1) {
                updateCoffeQuantity(itemToUpdate, -1)
            } else { removeCoffee(itemToUpdate) }
        }
    }

    function handleAddOrUpdateCoffe(item: ItemsDataType, coffeeQuantity: number) {

        if (itemToUpdate < 0) {
            addNewCoffee(item, coffeeQuantity)
        } else if (coffeeQuantity == 0) {
            removeCoffee(itemToUpdate)
        }
        else {
            updateCoffeQuantity(itemToUpdate, coffeeQuantity)
        }

    }

    return (
        <CoffeeCardContainer>
            <img src={item.img}></img>
            <div>
                {item.label.map((label) => (
                    <CoffeeTypes
                        key={label}>
                        <p >{label}</p>
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
                    {itemToUpdate >= 0 ? <IncrementButton coffeeQuantity={itemData[itemToUpdate].quantity ?? 0} handleMinus={handleMinus} handlePlus={handlePlus} /> : <IncrementButton coffeeQuantity={coffeeQuantity} handleMinus={handleMinus} handlePlus={handlePlus} />}
                    <button onClick={() => handleAddOrUpdateCoffe(item, coffeeQuantity)}>
                        <IconButton />
                    </button>
                </div>
            </CoffeeCardFooter>
        </CoffeeCardContainer>
    )
}

export function CoffeeCardCheckout({ item }: ItemsDataProps) {
    const { itemData, removeCoffee, addNewCoffee, updateCoffeQuantity } = useContext(OrderFormContext)

    const itemToUpdate = itemData.findIndex(element => element.id === item.id)


    function handleRemoveCoffee() {
        removeCoffee(itemToUpdate)
    }

    function handlePlus() {
        if (itemToUpdate >= 0) {
            updateCoffeQuantity(itemToUpdate, 1)
        } else addNewCoffee(item, 1)
    }

    function handleMinus() {
        if (itemToUpdate !== -1) {
            if ((itemData[itemToUpdate].quantity ?? 1) > 1) {
                updateCoffeQuantity(itemToUpdate, -1)
            } else { removeCoffee(itemToUpdate) }
        }
    }

    return (
        <>
            <CoffeeCardCheckoutContainer>
                <img src={item.img} ></img>
                <main>
                    <h3>{item.name}</h3>
                    <div>
                        <IncrementButton coffeeQuantity={itemData[itemToUpdate].quantity ?? 0} handleMinus={handleMinus} handlePlus={handlePlus} />
                        <RemoveButton handleRemoveCoffee={handleRemoveCoffee} />
                    </div>
                </main>
                <CoffeeCardCheckoutFooter>
                    <div>
                        <p>R$ </p>
                        <p>{item.price}</p>
                    </div>
                </CoffeeCardCheckoutFooter>

            </CoffeeCardCheckoutContainer>
        </>
    )
}