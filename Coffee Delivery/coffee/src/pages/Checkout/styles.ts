import 'styled-components'
import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
width:1440px;
padding: 32px 160px;
display:flex;
flex-wrap: wrap;
justify-content: space-between;

h2{
        font-family: 'Baloo 2';
        font-size: 18px;
        font-weight: 700;
        line-height: 130%
    }

`

export const CheckoutBaseDiv = styled.div`
display: flex;
padding: 40px;
flex-direction: column;
align-items: flex-start;
border-radius: 6px;

background:${(props) => props.theme['base-card']};
`

export const CheckoutFormContainer = styled(CheckoutBaseDiv)`
width:560px;
gap: 32px;

form{
    display:grid;
    grid-template-columns: auto auto auto;
    gap: 10px;

    input{
        border-radius: 4px;
        padding: 12px;
        align-items: center;

        background:${(props) => props.theme['base-input']};
        border:1px solid ${(props) => props.theme['base-button']};
        color:${(props) => props.theme['base-label']};

        &:hover{
         color:${(props) => props.theme['base-text']};
        }

    }
}
`
export const HeaderForm = styled.div`
display: flex;
align-items: flex-start;
gap: 8px;
align-self: stretch;

h3{
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;

color:${(props) => props.theme['base-subtitle']};
}

p{
font-size: 14px;

color:${(props) => props.theme['base-text']};
}

svg{
    color:${(props) => props.theme['yellow-dark']};
}

`


export const CepInput = styled.input`
grid-column: 1 / span 1;
`
export const RuaInput = styled.input`
grid-column: 1 / span 3;
`

export const ComplementoInput = styled.input`
grid-column: 2 / span 2;
`
export const UFInput = styled.input`
grid-column: 3 / span 1;
width: 60px;
`

export const CheckoutPaymentContainer = styled(CheckoutBaseDiv)`
margin-top:12px;
width:560px;
gap: 32px;
`

export const HeaderPaymentContainer = styled.div`
display: flex;
align-items: flex-start;
gap: 8px;

h3{
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;

color:${(props) => props.theme['base-subtitle']};
}

p{
font-size: 14px;

color:${(props) => props.theme['base-text']};
}

svg{
    color:${(props) => props.theme['purple']};
}

`

export const PaymentsCardList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;


    svg{
    color:${(props) => props.theme['purple']};
}
`

export const PaymentsCard = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    white-space: nowrap;

    border-radius: 6px;
    background:${(props) => props.theme['base-button']};

    &:hover{
        background:${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme['purple']};
    }
`

export const CheckoutPlaceOrderContainer = styled(CheckoutBaseDiv)`
width: 448px;
gap: 24px;
border-radius: 6px 44px;

`

export const Totalizers = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    font-size: 14px;
    width:100%;
    
    section{
        display: flex;
        justify-content: space-between;
    }
`