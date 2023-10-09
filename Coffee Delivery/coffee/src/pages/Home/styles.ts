import { styled } from 'styled-components'

export const HomeContainer = styled.main`
flex: 1;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

padding: 2rem 10rem;

div{
    display:flex;
}

h1{
 color: ${(props) => props.theme['base-title']};
 align-self: stretch;
 font-size
 font-family: "Baloo 2";
 font-size: 3rem;
 font-style: normal;
 font-weight: 800;
 line-height: 130%;
 padding-bottom: 1rem;
}


`

export const Navbar = styled.div`

`

export const TextHeader = styled.div`
display:flex;
flex-direction:column;
`

export const CoffeeList = styled.div`
display:flex;
flex-direction:flex-start;

max-width:567px;
max-height:80px;
`