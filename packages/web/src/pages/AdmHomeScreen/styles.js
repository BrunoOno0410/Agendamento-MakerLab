import { styled } from '../../styles/theme';

export const MainDiv = styled('div', {
    height: '89%',
    width: '100%',
    backgroundColor: 'white', //color test
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const AdmMenu = styled('div', {
    width: '5%',
    height: '95%',
    backgroundColor: '$gray_200',
    marginRight: '2%',
    display: 'flex',
    flexDirection: 'column',
    gap: '4vh',
    py: '1vh',
});

export const MenuButton = styled('button', {
    backgroundColor: '$gray_200',
    borderRadius: '20px',
    py: '1vh',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});
