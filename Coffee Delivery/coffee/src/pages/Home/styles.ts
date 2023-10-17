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
background-image: url("src/assets/BackgroundHome.svg");
background-size: cover;
width: 100%;
height: 544px;

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

/* display:flex; */
flex-wrap:wrap; 
flex-shrink: 0;


width: 600px;
height: 84px;
margin-top:66px;
font-size: 16px;
line-height: 130%;
color: ${(props) => props.theme['base-text']};

section{
    display:flex;
    gap: 12px;
    align-items: center;
    width: 300px;
    margin-bottom:20px;
    /* white-space: nowrap; */
}

svg{ 
    color: ${(props) => props.theme['white']};
    background: ${(props) => props.theme['yellow-dark']};  
    border-radius: 1000px;
    padding: 8px;
}

p{
    flex: 1 0 0;
}
`