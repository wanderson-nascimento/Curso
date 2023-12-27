import { ImageContainer, ProductDetails, ProductPageContainer } from "@/styles/pages/product"

export default function Product() {

    return (
        <ProductPageContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camisa x</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum doloremque, minima dolor quasi odio earum ab in doloribus maiores eaque autem adipisci amet eum. Delectus, sint fugiat? Nobis, eligendi.</p>
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductPageContainer>

    )
}