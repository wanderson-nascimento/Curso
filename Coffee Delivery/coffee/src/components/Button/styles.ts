import styled, { css } from 'styled-components'

export const ButtonTest = styled.button<{ $primary?: boolean; }>`
border-radius: 3px;
border: 2px solid #BF4F74;
margin: 0 1em;
padding: 0.25em 1em;

background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

`
const Container = styled.div`
    text-align: center;    
`

export const ButtonExtendBaseButton = styled(ButtonTest)`
    color: tomato;
    border-color: tomato;
`