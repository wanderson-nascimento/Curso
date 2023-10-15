import styled from 'styled-components'

export const PlaceOrderContainer = styled.div`
display: flex;
flex-direction:column;
width: 1440px;
padding: 0px 160px;
margin-top:80px;

h1{
    font-family: 'Baloo 2';
    font-size: 32px;  
    font-weight: 800;
    color: ${props => props.theme['yellow-dark']};
}

h2{
    font-size: 20px; 
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']};
}

main{
    display:flex;
    justify-content:space-between;
    margin-top:40px;

}

article{
    display: flex;
    width: 526px;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    

    border-radius: 6px 36px;
    border: 1px solid ${props => props.theme['yellow']};

    div{
        display:flex;
        gap: 12px;
        align-items: center;
    }
}

svg{
    border-radius: 1000px;
    border:none;
    gap: 8px;
    padding:8px;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['purple']};
}

`