import styled from 'styled-components'

export const SecondaryButton = styled.button<{ $secondary?: boolean; }>`
display: inline-flex;
height: 32px;
padding: 0px 8px;
justify-content: center;
align-items: center;
gap: 4px;
flex-shrink: 0;
border-radius: 6px;
border:none;

background: ${props => props.$secondary ? props.theme['base-button'] : props.theme['base-text']};
color: ${props => props.$secondary ? props.theme['base-text'] : props.theme['base-text']};

`

export const IncrementButtonStyle = styled(SecondaryButton)`
display: flex;
width:72px;
height: 38px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 4px;
margin-right:8px;

color: ${props => props.theme['purple']};

span{
font-size: 16px;
margin-left:4px;
margin-right:4px;
display: flex;
justify-content: center; 
align-items: center;

color: ${props => props.theme['base-title']};
}

button{
  color: ${props => props.theme['purple']};
  background: ${props => props.theme['base-button']};
  border:none;

  &:hover{
    color: ${props => props.theme['purple-dark']};
  }
}


`

export const IconButtonContainer = styled.button`

display: inline-flex;
padding: 8px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 6px;
border:none;

color: ${props => props.theme['white']};
background: ${props => props.theme['purple-dark']};

&:hover{
  background: ${props => props.theme['purple']};
}

`
