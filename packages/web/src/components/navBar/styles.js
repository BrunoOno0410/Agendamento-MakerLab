import { styled } from "../../styles/theme";
import { Link } from "react-router-dom";

export const UpperMenu = styled('div', {
    display: 'flex',
    width: '100%',
    height: '12%',
    backgroundColor: '$gray_200',
    borderBottom: '2px solid $gray_300',
    py: '1vh',
    justifyContent: 'space-between',
});

export const LogoFacamp = styled('img', {
    maxHeight: '5vh',
    width: 'auto',
});

export const DateControl = styled('div', {
    marginLeft: '2rem',
    display: 'flex',
    alignItems: 'center',
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

export const Year = styled('p', {
    color: '$blue_800',
    fontSize: '$md',
    fontWeight: '100',
    marginLeft: '0.5vw'
});

export const Logout = styled('button', {
    marginLeft: 'auto',
    marginRight: '1vw',
    borderRadius: '16px',
    backgroundColor: '$gray_200',
    justifyContent: 'flex-end',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});

export const StyledLink = styled(Link, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

export const AddBooking = styled('button', {
    margin: '1vw',
    borderRadius: '1rem',
    backgroundColor: '$gray_200',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});