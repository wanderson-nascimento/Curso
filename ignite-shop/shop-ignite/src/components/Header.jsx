import Image from 'next/image'
import bolsa from '../assets/bolsa.svg'
import { BolsaLogo } from '@/styles/pages/app';
import logo from '../assets/logo.svg'
import { useShoppingCart } from 'use-shopping-cart'

export default function HeaderComponent() {
    const {cartDetails} = useShoppingCart()
    console.log('Elementos no carrinho', Object.keys(cartDetails).length)
    return (
        <div style={{
            padding: '2rem 0',
            width: '100%',
            maxWidth: 1180,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            p:{
                color:'white'
            }
        }}>
            <Image src={logo} alt='' />
            <button style={{ border: 'none', padding: 0, backgroundColor: 'transparent', cursor: 'pointer' }} onClick={() => setMiniCart(!miniCart)}>
                <BolsaLogo src={bolsa} alt='' />
                <p>{`${Object.keys(cartDetails).length}`}</p>
            </button>
        </div>
    )
}
