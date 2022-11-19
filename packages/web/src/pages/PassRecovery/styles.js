import { styled } from '../../styles/theme';

export const MainContainer = styled('div', {
  backgroundColor: '$blue_800',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
});

export const CenterDiv = styled('div', {
  backgroundColor: '$white',
  height: '80vh',
  width: '40vw',
  mx: 'auto',
  borderRadius: '16px',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$blue_800',
  '& h2': {
    fontSize: '$ml',
    fontWeight: '700',
  },
  '& h3': {
    fontSize: '$md',
    fontWeight: '700',
  },
});

export const FormContainer = styled('form', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15%',
  
  '& label': {
      color: '$blue_800',
      fontSize: '$sm',
  },
});

export const Input = styled('input', {
  borderRadius: '16px',
  height: '8vh',
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
  height: '12%',
  width: '50%',
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
