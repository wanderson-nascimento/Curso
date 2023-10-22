import { HomeContainer, TextHeader, CoffeeList } from "./styles";
import coffeeHomeHeader from '../../assets/CoffeeHomeHeader.svg'
import { Timer, ShoppingCart, Package, Coffee } from '@phosphor-icons/react'
import { CoffeeCard } from '../../components/CoffeeCard'
import catalogList from '../../assets/catalogList.json'

export function Home() {    
    return (
        <HomeContainer>
            <header>
                <div>
                    <TextHeader>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <span>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </span>
                        <CoffeeList>
                            <section>
                                <ShoppingCart  size={32} weight="fill" />
                                <p>Compra simples e segura</p>
                            </section>
                            <section>
                                <Package size={32} weight="fill"/>
                                <p>Embalagem mantém o café intacto</p>
                            </section>
                            <section>
                                <Timer  size={32} weight="fill"/>
                                <p>Entrega rápida e rastreada</p>
                            </section>
                            <section>
                                <Coffee weight="fill" size={32}/>
                                <p>O café chega fresquinho até você</p>
                            </section>
                        </CoffeeList>
                    </TextHeader>
                    <img src={coffeeHomeHeader} width={476} height={360} ></img>
                </div>
            </header>
            <h2>Nosso cafés</h2>
            <main>
                {catalogList.map(item => {
                    return(
                        <CoffeeCard
                            key={item.id}
                            item={item} 
                        />
                    )
                })}

            </main>
        </HomeContainer>
    )
}