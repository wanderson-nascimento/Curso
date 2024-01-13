import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Container, Header, BolsaLogo } from '@/styles/pages/app';

import Image from 'next/image'
import logo from '../assets/logo.svg'
import bolsa from '../assets/bolsa.svg'

import { CartProvider, useShoppingCart } from 'use-shopping-cart'

import { useState } from 'react'
import HeaderComponent from '@/components/Header'




globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [miniCart, setMiniCart] = useState(false)


  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency="USD"
      allowedCountries={['US', 'GB', 'BR']}
      billingAddressCollection={true}
    >    <Container>
        <HeaderComponent />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
