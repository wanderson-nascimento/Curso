import { HomeContainer, CoffeeList, TextHeader } from "./styles";
import coffeeHomeHeader from '../../assets/CoffeeHomeHeader.svg'
import { Timer } from '@phosphor-icons/react'
import { CoffeeCard } from '../../components/CoffeeCard'

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
                    </TextHeader>
                    <img src={coffeeHomeHeader} width={476} height={360} ></img>
                </div>
                <CoffeeList>
                    <div>
                        <Timer />
                        <span>Compra simples e segura</span>
                    </div>
                    <div>
                        <Timer />
                        <span>Entrega rápida e rastreada</span>
                    </div>
                    <div>
                        <Timer />
                        <span>Embalagem mantém o café intacto</span>
                    </div>
                    <div>
                        <Timer />
                        <span>O café chega fresquinho até você</span>
                    </div>
                </CoffeeList>
            </header>
            <main>
                Nosso cafés 
                <CoffeeCard/>
            </main>
        </HomeContainer>
    )
}