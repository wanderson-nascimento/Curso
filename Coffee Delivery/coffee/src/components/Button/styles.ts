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

background-color: ${props => props.$secondary ? props.theme['base-button'] : props.theme['base-text']};
color: ${props => props.$secondary ? props.theme['base-text'] : props.theme['base-text']};

`

export const PrimaryButton = styled.button<{ $primary?: boolean; }>`
display: inline-flex;
justify-content: center;
align-items: center;
flex-shrink: 0;

border-radius: 6px;
padding: 12px 8px;
gap: 4px;
border:none;

background-color: ${props => props.$primary ? props.theme['yellow'] : props.theme['white']};
color: ${props => props.$primary ? props.theme['yellow-dark'] : props.theme['white']};

`

export const IncrementButtonStyle = styled.div`
display: flex;
width:72px;
height: 38px;
padding: 8px;
justify-content: center;
align-items: center;
gap: 4px;
margin-right:8px;
font-size: 12px;
border-radius: 6px;
background: ${props => props.theme['base-button']};
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
    cursor:pointer;
  }
}


`

export const IconButtonContainer = styled.div`

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
  cursor:pointer;
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

export const CartButtonContainer = styled(PrimaryButton)`
padding: 8px;
margin-left:12px;

background-color: ${props => props.theme['yellow-light']};

&:hover{
  background-color: ${props => props.theme['white']};
  cursor:pointer;
}
`

export const RemoveButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  

  border-radius: 6px;
  border:none;
  color: ${props => props.theme['base-text']};
  font-size: 12px;
  font-weight: 400;

  background-color: ${props => props.theme['base-button']};

  &:hover{
    cursor:pointer;
  }
 

 svg{
  color: ${props => props.theme['purple']};
 }
`

export const PlaceOrderButtonContainer = styled.div`
display: flex;
padding: 12px 8px;
justify-content: center;
align-items: center;
gap: 4px;
text-transform: uppercase;
font-size: 14px;
font-weight: 700;

&:hover{
  cursor:pointer;
}

border-radius: 6px;

  color: ${props => props.theme['white']};
  background: ${props => props.theme['yellow']};
`