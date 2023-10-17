
import { CurrencyDollar, Timer, MapPin } from '@phosphor-icons/react'
import Illustration from '../../assets/Illustration.svg'
import { PlaceOrderContainer } from './styles'

export function PlaceOrder() {
    return (
        <PlaceOrderContainer>
            <header>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>
            </header>
            <main>
                <article>
                    <div>
                        <MapPin size={32} weight="fill"/>
                        <section>
                            <p>Entrega em <strong>Rua João Daniel Martinelli,</strong> </p>
                            <p> 102Farrapos - Porto Alegre, RS</p>
                        </section>
                    </div>
                    <div>
                        <Timer size={32} weight="fill"/>
                        <section>
                            <p>Previsão de entrega </p>
                            <strong>20 min - 30 min </strong>
                        </section>
                    </div>
                    <div>
                        <CurrencyDollar size={32} />
                        <section>
                            <p>Pagamento na entrega </p>
                            <strong>Cartão de Crédito</strong>
                        </section>
                    </div>
                </article>
                <section>
                    <img src={Illustration} width={492} height={293} />
                </section>
            </main>


        </PlaceOrderContainer>
    )
}