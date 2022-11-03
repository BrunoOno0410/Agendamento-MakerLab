import { styled } from './theme';

export const Container = styled('div', {
  display: 'flex',
  height: '100%',
});

export const Booking = styled('div', {
  flex: '1',
  backgroundColor: '$blue_800',
  maxHeight: '100%',
  color: '$white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: '10rem',
  '& h2': {
    fontSize: '$lg',
    fontWeight: '700',
  },
});

export const BookingButton = styled('button', {
  borderRadius: '16px',
  height: '5rem',
  width: '30rem',
  fontSize: '$md',
  fontWeight: '700',
  backgroundColor: '$gray_100',
  color: '$blue_800',
  '&:hover': {
    backgroundColor: '$gray_300',
    color: '$blue_900',
    transition: '0.5s',
    cursor: 'pointer',
  },
  '$:focus': {
    border: 'solid 4px #063859',
  },
});

export const Login = styled('div', {
    flex: '1',
    backgroundColor: '$gray_100',
    maxHeight: '100%',
    color: '$blue_800',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: '10rem',
    '& h2': {
      fontSize: '$lg',
      fontWeight: '700',
    },
});

export const Input = styled('input', {
    borderRadius: '16px',
    height: '4rem',
    width: '40rem',
    fontSize: '$md',
    fontWeight: '700',
    backgroundColor: '$gray_200',
    color: '$blue_800',
    px: '15px',
    '&:hover': {
      backgroundColor: '$gray_300',
      color: '$blue_900',
      transition: '0.5s',
    },
    '$:focus': {
      border: 'solid 4px #063859',
    },
});

export const LoginButton = styled('button', {
    borderRadius: '16px',
    height: '5rem',
    width: '40rem',
    fontSize: '$md',
    fontWeight: '700',
    backgroundColor: '$blue_800',
    color: '$gray_100',
    '&:hover': {
      backgroundColor: '$blue_900',
      color: '$gray_200',
      transition: '0.5s',
      cursor: 'pointer',
    },
    '$:focus': {
      border: 'solid 4px #063859',
    },
  });

export const FormContainer = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3rem',
    '& label': {
        color: '$blue_800',
        fontSize: '$sm',
    }
});

export const PasswordRecoverButton = styled('a', {
    style: 'none',
    textAlign: 'end',
    width: '100%',
    '&:hover': {
        color: '$blue_900',
        transition: '0.5s',
        cursor: 'pointer',
    },
});

export const RecoverContainer = styled('div', {
    width: '100%',
    display: 'flex',
    alignContent: 'flex-end',
});