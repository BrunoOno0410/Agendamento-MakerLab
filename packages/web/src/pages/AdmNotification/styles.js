import { styled } from '../../styles/theme';

export const MainDiv = styled('div', {
    height: '88%',
    width: '100%',
    backgroundColor: '$blue_800',
    display: 'flex',
    alignItems: 'center',
});

export const NotifDiv = styled('div', {
    backgroundColor: '$gray_200',
    height: '95%',
    width: '97%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1rem',
    'h1': {
        fontSize: '5rem',
        color: '$blue_800'
    }
});