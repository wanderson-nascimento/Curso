import  styled  from 'styled-components'

export const HomeContainer = styled.div`
 flex: 1;
 width: 1440px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 32px 160px 157px 160px;
 align-items: flex-start;
 margin-top:92px;


div{
    display:flex;
}


main{
    display:flex;
    flex-wrap:wrap;
    max-width: 1440px;
    height: 1645px;
    align-items: flex-start;
    gap: 32px;
    align-content: flex-start

}
header{
margin-bottom:92px;

img{
    margin-left:56px
}}

h2{

    font-family: 'Baloo 2';
    font-size: 32px;
    font-weight: 800;
    line-height: 130%;
    margin-bottom:54px;
}
`


export const TextHeader = styled.div`
 display:flex;
 flex-direction:column;

h1{
 color: ${(props) => props.theme['base-title']};
 font-family: 'Baloo 2';
 font-size: 48px;
 font-weight: 800;
 line-height: 130%;
 margin-bottom:16px;
} 
span{
 color: ${(props) => props.theme['base-subtitle']};  
 font-size: 20px;
 font-weight: 400;
 line-height: 130%;
}
`

export const CoffeeList = styled.div`

display:flex;
gap: 12px;
align-items: center;
width: 567px;
height: 84px;
margin-top:66px;
color: ${(props) => props.theme['base-text']};




section{
    display:flex;
    gap: 12px;
}

svg{ 
    color: ${(props) => props.theme['white']};
    background: ${(props) => props.theme['base-subtitle']};  
    border-radius: 1000px;
    padding: 8px;
}

// p{
//     /* Text/Regular M */
// font-family: 'Roboto';
// font-size: 16px;
// font-style: normal;
// font-weight: 400;
// line-height: 130%; /* 20.8px */
// }
`