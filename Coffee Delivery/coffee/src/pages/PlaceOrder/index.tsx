
import { CurrencyDollar, Timer, MapPin } from '@phosphor-icons/react'
import Illustration from '../../assets/Illustration.svg'
import { PlaceOrderContainer } from './styles'
import { OrderFormContext } from '../../contexts/OrderFormContext'
import { useContext } from "react"

export function PlaceOrder() {
    const { profileData, paymentData } = useContext(OrderFormContext);

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
                            <p>Entrega em <strong>{`${profileData?.rua}, ${profileData?.numero}`}</strong> </p>
                            <p>{`${profileData?.bairro} - ${profileData?.cidade}, ${profileData?.uf}`}</p>
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
                            <strong>{`${paymentData}`}</strong>
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