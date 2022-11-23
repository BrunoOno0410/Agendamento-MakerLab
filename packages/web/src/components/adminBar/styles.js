import { styled } from "../../styles/theme";

export const AdmMenu = styled('div', {
    width: '5%',
    height: '95%',
    backgroundColor: '$gray_200',
    marginRight: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

export const MenuButtonClicked = styled('button', {
    backgroundColor: '$gray_300',
    borderRadius: '20px',
    py: '1vh',
    border: '1px solid $gray_800',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});