import styled from 'styled-components'
import {SecondaryButton} from '../Button/styles'

export const HeaderContainer = styled.div`


display: flex;
align-items: center;
padding: 32px 160px;
justify-content: space-between;
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

export const LocationButtonContainer = styled(SecondaryButton)`

padding: 8px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 6px;
border:none;
height: 38px;

color: ${props => props.theme['purple-dark']};
background-color: ${props => props.theme['purple-light']};

&:hover{
  background-color: ${props => props.theme['white']};
  cursor:pointer;
}
`