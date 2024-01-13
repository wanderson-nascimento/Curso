import Image from 'next/image'
import { styled } from '..'

export const Container = styled('div',
    {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '100vh',
    })

export const Header = styled('header',
    {
        padding: '2rem 0',
        width: '100%',
        maxWidth: 1180,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'

    })


export const BolsaLogo = styled(Image, {
    display: 'inline-flex',
    padding: '12px',
    alignItems: 'center',
    gap: '12px',
    borderRadius: '6px',
    backgroundColor: '$gray800',
    color:'$graySac'
})