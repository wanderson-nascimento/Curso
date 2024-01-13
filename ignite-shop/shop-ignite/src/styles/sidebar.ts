import { styled } from "../styles";

export const SideBarContainer = styled('div',
    {
        backgroundColor: '$gray800',
        width: 480,
        height: '900px',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        padding: '48px',
        marginTop: '48px',

        // transform: 'translateY(110%)',
        // opacity: 0,
        // transition: 'all 0.2s ease-in-out',

        h1: {
            fontSize: '$xl',
            alignSelf: 'flex-start',
            marginBottom: 32,
            marginTop: 48,
        },

        main: {
            display: 'flex',
            width: '384px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 24
        },

        img: {
            alignSelf: 'flex-end',
            position: 'absolute',
        }

        
    });


export const ItemsSideBar = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',

    img: {
        position: 'unset',
        display: "flex",
        width: '101.942px',
        height: '93px',
        padding: '0px 3.577px',
        justifyContent: 'center',
        alignItems: 'center',
    },

    span: {
        color: '$gray300',
        fontSize: '$md',
    },

    p: {
        color: '$gray100',
        fontWeight: 'bold',
        fontSize: '$lg'
    },

    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px',
        flex: '1 0 0'
    },

    a: {
        color: '$green300',
        fontWeight: 'bold',
        fontSize: '16px'
    }

})

export const FooterContainer = styled('footer', {
    marginTop: 'auto',
    display: "flex",
    flexDirection: 'column',
    alignSelf: 'center',


    header: {
        fontSize: '$md',
        fontWeight: 'normal',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    div: {
        fontSize: '$lg',
        fontWeight: 'bold',

        display: 'flex',
        justifyContent: 'space-between',

        span: {
            fontSize: '24px',
        }
    },


    button: {
        position: 'inherit',
        width: 384,
        gap: 10,
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '20px 32px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',
        marginTop: 48,

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        }
    }
})

