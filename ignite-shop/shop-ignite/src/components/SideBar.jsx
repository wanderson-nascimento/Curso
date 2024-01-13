import logo from '@/assets/logo.svg'
import fechar from '@/assets/fechar.svg'
import { SideBarContainer, ItemsSideBar, FooterContainer } from "@/styles/sidebar"
import Image from "next/image"
import { useShoppingCart } from 'use-shopping-cart'

export default function SideBar() {
    const { cartDetails, removeItem } = useShoppingCart()

    console.log('Total do carrinho', cartDetails)

    const ItemSideBar = ({ item, detailsItem }) => {
        return (
            <ItemsSideBar>
                <Image src={logo} alt="" />
                <div>
                    <span>{detailsItem.name}</span>
                    <p>{detailsItem.price}</p>
                    <button style={{ border: 'none', padding: 0, backgroundColor: 'transparent', cursor: 'pointer' }} onClick={()=>removeItem(item)}>
                        <a>Remover</a>
                    </button>

                </div>
            </ItemsSideBar>
        );
    };

    return (
        <>
            <SideBarContainer>
                <h1>Sacola de compras</h1>
                <Image src={fechar} alt='' />
                <main>
                    {Object.entries(cartDetails).map(([item, detailsItem]) => (
                        <ItemSideBar key={item} item={item} detailsItem={detailsItem} />
                    ))}
                </main>
                <FooterContainer>
                    <header>
                        <strong>Quantidade</strong>
                        <span>{`${Object.keys(cartDetails).length} itens`}</span>
                    </header>
                    <div>
                        <strong>Valor total</strong>
                        <span>{`R$ 270,00`}</span>
                    </div>

                    <button>Finalizar compra</button>
                </FooterContainer>
            </SideBarContainer>
        </>
    )
}