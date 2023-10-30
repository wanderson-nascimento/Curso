import styled from 'styled-components'

export const HeaderContainer = styled.div`


display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem 10rem;
width: 1440px;


nav{
    display:flex
}
div{
    display:flex
}

a{
    text-decoration: none;
}

p{
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};
    border-radius: 1000px;

    
    margin-left:-8.345px;
    margin-top: -8px;

    font-size: 12px;
}
`

