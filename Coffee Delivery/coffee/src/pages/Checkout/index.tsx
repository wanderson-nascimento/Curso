import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { CheckoutContainer, Totalizers, CheckoutPlaceOrderContainer, PaymentsCard, CheckoutPaymentContainer, PaymentsCardList, HeaderForm, HeaderPaymentContainer, CheckoutFormContainer, CepInput, RuaInput, ComplementoInput, UFInput } from "./styles";
import { CoffeeCardCheckout } from '../../components/CoffeeCard'
import { PlaceOrderButton } from "../../components/Button";
import { OrderFormContext } from '../../contexts/OrderFormContext'
import { useContext } from "react"

export function Checkout() {
    const { itemData, totalizer, addPayment } = useContext(OrderFormContext);

    function handleClickPayment(event: React.MouseEvent<HTMLElement>) {
        const paymentType = event.currentTarget.textContent;
        if (paymentType !== null)
        addPayment(paymentType)
        
        console.log(`Pagamento selecionado foi ${paymentType}`);

    }

    return (
        <CheckoutContainer>
            <CheckoutFormContainer>
                <h2>Complete seu pedido</h2>
                <HeaderForm>
                    <MapPinLine size={22} />
                    <div><h3>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </HeaderForm>
                <form>
                    <CepInput type="text" placeholder="CEP" />
                    <RuaInput type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                    <ComplementoInput type="text" placeholder="Complemento" />
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Cidade" />
                    <UFInput type="text" placeholder="UF" />
                </form>
            </CheckoutFormContainer>
            <CheckoutPlaceOrderContainer>
                <h2>Cafés selecionados</h2>
                {itemData.map(item => {
                    return (
                        < CoffeeCardCheckout
                            key={item.id}
                            item={item}
                        />
                    )
                })}
                <Totalizers>
                    <section>
                        <span>Total de itens</span>
                        <p>{`R$ ${totalizer.toFixed(2)}`}</p>
                    </section>
                    <section>
                        <p>Entrega</p>
                        <p>R$ 3.50</p>
                    </section>
                    <section>
                        <h3>Total</h3>
                        <h3>{`R$ ${(totalizer + 3.5).toFixed(2)}`}</h3>
                    </section>
                    <PlaceOrderButton />
                </Totalizers>
            </CheckoutPlaceOrderContainer>
            <CheckoutPaymentContainer>
                <HeaderPaymentContainer>
                    <CurrencyDollar size={22} />
                    <div>
                        <h3>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </HeaderPaymentContainer>
                <PaymentsCardList>
                    <PaymentsCard onClick={handleClickPayment}>
                        <CreditCard size={16} />
                        <p>CARTÃO DE CRÉDITO</p>
                    </PaymentsCard>
                    <PaymentsCard onClick={handleClickPayment}>
                        <Bank size={16} />
                        <p>CARTÃO DE DÉBITO</p>
                    </PaymentsCard>
                    <PaymentsCard onClick={handleClickPayment}>
                        <Money size={16} />
                        <p>DINHEIRO</p>
                    </PaymentsCard>
                </PaymentsCardList>
            </CheckoutPaymentContainer>
        </CheckoutContainer>
    )
}