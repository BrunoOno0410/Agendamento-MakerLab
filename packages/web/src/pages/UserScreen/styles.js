import { styled } from '../../styles/theme';

export const MainDiv = styled('div', {
    height: '88%',
    width: '100%',
    backgroundColor: 'white', //color test
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

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

