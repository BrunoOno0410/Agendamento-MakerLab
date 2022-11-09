import { styled } from '../../styles/theme';

export const UpperMenu = styled('div', {
    display: 'flex',
    width: '100%',
    height: '10vh',
    backgroundColor: '$gray_200',
});

export const MainDiv = styled('div', {
    height: '94%',
    width: '100%',
    backgroundColor: '$blue_800',
});

export const LogoFacamp = styled('img', {
    height: 'auto',
    maxWidth: '100%',
});

export const DateControl = styled('div', {
    marginLeft: '2rem',
    display: 'flex',
})

export const ArrowBack = styled('button', {
    backgroundColor: '$gray_200',
    borderRadius: '24px',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});

export const ArrowForward = styled('button', {
    backgroundColor: '$gray_200',
    borderRadius: '24px',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});

export const Month = styled('button', {
    color: '$blue_800',
    fontSize: '$md',
    fontWeight: '700',
    backgroundColor: '$gray_200',
    '&:hover': {
        color: '$blue_900',
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});

export const LogoutDiv = styled('div', {
    width: '100%',
    display: 'flex',
    alignContent: 'flex-end',
});

export const Logout = styled('button', {
    marginRight: '1vw',
    marginLeft: 'auto',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});

export const TimeTable = styled('div', {
    backgroundColor: '$gray_100',
    height: '95%',
    width: '97%',
    mx: 'auto',
    my: 'auto', //Não está alinhando verticalmente
});