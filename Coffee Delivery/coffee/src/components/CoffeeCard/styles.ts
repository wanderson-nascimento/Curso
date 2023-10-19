import styled from 'styled-components'
import { IncrementButton, IconButton } from "../Button/index"

export const CoffeeCardContainer = styled.div<{ $primary?: boolean; }>`
background-color:${(props) => props.theme['base-card']};
width: 256px;
height: 310px;
flex-shrink: 0;
border-radius: 6px 36px;

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items: center;


    img{
        width: 120px;
        height: 120px;
        flex-shrink: 0;
        display:flex;
        justify-content:center;
        margin-top:-20px;

    }

    h3{
    font-family: 'Baloo 2';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
    margin-bottom:8px;
    font-family: 'Baloo 2';
    }

    span{
      /* Text/Regular S */
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */  
    text-align: center;
    color:${(props) => props.theme['base-label']};
    width:216px;
    height:36px;
    }

    button{
        border:none;
    }

`

export const CoffeeTypes = styled.div`
display: inline-flex;;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 100px;
margin-top:12px;
margin-bottom:16px;
margin-right:4px;

background-color:${(props) => props.theme['yellow-light']};
color:${(props) => props.theme['yellow-dark']};

p{
font-family: 'Roboto';
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 13px */
text-transform: uppercase;
padding: 4px 8px;
border-radius: 100px;
}

`

export const CoffeeCardFooter = styled.div`
display: flex;
width: 208px;
justify-content: space-between;
align-items: center;
margin-top:33px;
justify-content:space-between;

pre{
   align-self: flex-end;
   font-size:14px;
}

p{
    font-family: 'Baloo 2';
    font-size: 24px;
    font-weight: 800;
    align-self: flex-end;
}
`

export const CoffeeCardCheckoutContainer = styled.div`
display: flex;
padding: 8px 4px;
justify-content: flex-start;
align-items: flex-start;
width:360px;

main{
display: flex;
flex-direction: column;
align-items: flex-start;  
gap: 8px;
    div{
        display:flex;
        flex-wrap:nowrap; 
    }
}


img{
    width: 64px;
    height: 64px;
    margin-right:20px;
}

h3{
    font-size:16px;
}
`

export const CoffeeCardCheckoutFooter = styled.div`
display: flex;
text-align: right;
margin-left: auto;

p{
    font-size: 16px;
    font-weight: 700;
    display: inline;
}

`