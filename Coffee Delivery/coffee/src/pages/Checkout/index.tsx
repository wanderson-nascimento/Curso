import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { CheckoutContainer, PlaceOrderButtonContainer, Totalizers, CheckoutPlaceOrderContainer, PaymentsCard, CheckoutPaymentContainer, PaymentsCardList, HeaderForm, HeaderPaymentContainer, CheckoutFormContainer, CepInput, RuaInput, ComplementoInput, UFInput } from "./styles";
import { CoffeeCardCheckout } from '../../components/CoffeeCard'
import { OrderFormContext } from '../../contexts/OrderFormContext'
import { useContext, useState } from "react"
import { NavLink, redirect, useNavigate } from "react-router-dom";
import React from "react";

export function Checkout() {
    const { itemData, totalizer, addPayment, profileData, updateProfileData } = useContext(OrderFormContext);
    const navigate = useNavigate();

    function handleClickPayment(event: React.MouseEvent<HTMLElement>) {
        const paymentType = event.currentTarget.textContent;
        if (paymentType !== null)
            addPayment(paymentType)

        console.log(`Pagamento selecionado foi ${paymentType}`);

    }

    const [adressForm, setAdressForm] = useState({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setAdressForm({ ...adressForm, [name]: value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        updateProfileData(adressForm)
        console.log('Form data', adressForm)

        navigate('/placeorder')

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
                    <CepInput type="text" placeholder="CEP" name="cep" value={adressForm.cep} onChange={handleChange} />
                    <RuaInput type="text" placeholder="Rua" name="rua" value={adressForm.rua} onChange={handleChange} />
                    <input type="text" placeholder="Número" name="numero" value={adressForm.numero} onChange={handleChange} />
                    <ComplementoInput type="text" placeholder="Complemento" name="complemento" value={adressForm.complemento} onChange={handleChange} />
                    <input type="text" placeholder="Bairro" name="bairro" value={adressForm.bairro} onChange={handleChange} />
                    <input type="text" placeholder="Cidade" name="cidade" value={adressForm.cidade} onChange={handleChange} />
                    <UFInput type="text" placeholder="UF" name="uf" value={adressForm.uf} onChange={handleChange} />
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
                    <PlaceOrderButtonContainer onClick={handleSubmit}>
                        confirmar pedido
                    </PlaceOrderButtonContainer>
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

