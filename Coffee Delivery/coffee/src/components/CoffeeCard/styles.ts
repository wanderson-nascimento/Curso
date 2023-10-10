import styled, { css } from 'styled-components'

export const CoffeeCardContainer = styled.div<{ $primary?: boolean; }>`
background-color:${(props) => props.theme['background']};
width: 256px;
height: 310px;
flex-shrink: 0;
border-radius: 6px 36px;
margin-top:54px;

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
    font-family: Baloo 2;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
    margin-bottom:8px;
    }

    span{
      /* Text/Regular S */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */  
    text-align: center;
    color:${(props) => props.theme['base-label']};
    width:216px;
    height:36px;
    }

`

export const CoffeeTypes = styled.div`
display: flex;
padding: 4px 8px;
justify-content: center;
align-items: center;
border-radius: 100px;
width:81px;
height:21px;
margin-bottom:16px;
margin-top:12px;

background-color:${(props) => props.theme['yellow-light']};
color:${(props) => props.theme['yellow-dark']};

p{
font-family: Roboto;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 13px */
text-transform: uppercase;
};

`

export const CoffeeCardFooter = styled.div`
margin-top:33px;
justify-content:space-between;

`