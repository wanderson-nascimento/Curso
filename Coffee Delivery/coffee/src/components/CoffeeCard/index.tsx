import { CoffeeCardContainer, CoffeeCardCheckoutFooter, CoffeeTypes, CoffeeCardFooter, CoffeeCardCheckoutContainer } from "./styles"
import { IncrementButton, IconButton, RemoveButton, } from "../Button/index"
import { ItemsDataProps, ItemsDataType, OrderFormContext } from '../../contexts/OrderFormContext'
import { useContext, useEffect, useState } from "react"


export function CoffeeCard({ item }: ItemsDataProps) {
    const [coffeeQuantiy, setCoffeeQuantity] = useState(1)
    const { addNewCoffee, itemData, updateCoffeQuantity, removeCoffee } = useContext(OrderFormContext)

    function handlePlus() {
        setCoffeeQuantity(prevCoffeeQuantity => prevCoffeeQuantity + 1)
    }

    function handleMinus() {
        if (coffeeQuantiy > 0) {
            setCoffeeQuantity(prevCoffeeQuantity => prevCoffeeQuantity - 1)
        }
    }

    function handleAddOrUpdateCoffe(item: ItemsDataType, coffeeQuantiy: number) {
        const itemToUpdate = itemData.findIndex(element => element.id === item.id)
        if (itemToUpdate < 0) {
            addNewCoffee(item, coffeeQuantiy)
        } else if (coffeeQuantiy == 0) {
            removeCoffee(itemToUpdate)
        }
        else {
            updateCoffeQuantity(itemToUpdate, coffeeQuantiy)
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
                    <IncrementButton coffeeQuantity={coffeeQuantiy} handleMinus={handleMinus} handlePlus={handlePlus} />
                    <button onClick={() => handleAddOrUpdateCoffe(item, coffeeQuantiy)}>
                        <IconButton />
                    </button>
                </div>
            </CoffeeCardFooter>
        </CoffeeCardContainer>
    )
}

export function CoffeeCardCheckout({ item }: ItemsDataProps) {
    const [coffeeQuantiy, setCoffeeQuantity] = useState(item.quantity)
    const { itemData, removeCoffee, updateCoffeQuantity } = useContext(OrderFormContext)

    const itemToUpdate = itemData.findIndex(element => element.id === item.id)
 

    function handleRemoveCoffee() {
        removeCoffee(itemToUpdate)
    }

    function handlePlus() {
        console.log('quantidade de cafe antes',coffeeQuantiy)
        setCoffeeQuantity(prevCoffeeQuantity => (prevCoffeeQuantity ?? 0) + 1)
    }

    function handleMinus() {
        if (coffeeQuantiy) {
            setCoffeeQuantity(prevCoffeeQuantity => (prevCoffeeQuantity ?? 0) - 1)
            
        }
    }

    useEffect( () =>{
        updateCoffeQuantity(itemToUpdate, (coffeeQuantiy ?? 0))
        console.log('quantidade de cafe depois do setstate',coffeeQuantiy)
    },[coffeeQuantiy])

    return (
        <>
            <CoffeeCardCheckoutContainer>
                <img src={item.img} ></img>
                <main>
                    <h3>{item.name}</h3>
                    <div>
                        <IncrementButton coffeeQuantity={coffeeQuantiy ?? 0} handleMinus={handleMinus} handlePlus={handlePlus} />
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