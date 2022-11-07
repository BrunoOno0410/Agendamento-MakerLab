import { styled } from '../../styles/theme';

export const UpperMenu = styled('div', {
    display: 'flex',
    width: '100%',
    height: '6vh',
    backgroundColor: '$gray_200',
  });

export const LogoFacamp = styled('img', {
    height: 'auto',
    maxWidth: '100%',
});

export const ArrowBack = styled('button', {
    marginLeft: '5rem',
    px: '1rem',
    //backgroundImage: url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"),
    //<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
})

export const ArrowFoward = styled('button', {
    marginLeft: '1rem',
    px: '1rem',
    //backgroundImage: url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"),
    //<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
})

export const Month = styled('button', {
    color: '$blue_800',
    fontSize: '$md',
    fontWeight: '700',
    '&:hover': {
        color: '$blue_900',
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
})

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
})