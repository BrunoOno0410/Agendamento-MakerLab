import { render } from 'react-dom'; //checar 
import { styled } from '../../styles/theme';

export const UpperMenu = styled('div', {
    display: 'flex',
    width: '100%',
    height: '8vh',
    backgroundColor: '$gray_200',
    borderBottom: '2px solid $gray_300',
    paddingTop: '1vh',
    paddingBottom: '1vh',
    paddingLeft: '1vw',
});

export const MainDiv = styled('div', {
    height: '89%',
    width: '100%',
    backgroundColor: 'white', //color test
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const LogoFacamp = styled('img', {
    maxHeight: '5vh',
    width: 'auto',
});

export const DateControl = styled('div', {
    marginLeft: '2rem',
    display: 'flex',
});

//trocar icone
export const ArrowBack = styled('button', {
    backgroundColor: '$gray_200',
    borderRadius: '24px',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});

//trocar icone
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

export const Year = styled('text', {
    color: '$blue_800',
    fontSize: '$md',
    fontWeight: '100',
    marginTop: '1.75vh',
    marginLeft: '0.5vw',
});

export const Logout = styled('button', {
    marginLeft: 'auto',
    marginRight: '1vw',
    backgroundColor: '$gray_200',
    alignItems: 'flex-end',
    '&:hover': {
        backgroundColor: '$gray_300',
        transition: '0.5s',
        cursor: 'pointer',
    },
});

export const AdmMenu = styled('div', {
    width: '5%',
    height: '95%',
    backgroundColor: '$gray_200',
    marginRight: '2%',
    display: 'flex',
    flexDirection: 'column',
});

export const TimeTable = styled('div', {
    backgroundColor: '$gray_100',
    height: '95%',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
});

export const UpperTimeTable = styled('div', {
    flex: '1',
    backgroundColor: '$gray_200',
    paddingLeft:'7.69%',
    display: 'flex',    
});

export const UpperDownTimeTable = styled('div', {
    flex: '1',
    backgroundColor: '$blue_500',
    paddingLeft:'7.69%',
    display: 'flex',    
});

export const LowerTimeTable = styled('div', {
    flex: '12',
    display: 'flex',
    backgroundColor: '$gray_200',
});

export const HourTimeTable = styled('div', {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$gray_200',
});

export const DayTimeTable = styled('div', {
    flex: '12',
    display: 'flex',
    backgroundColor: '$gray_200',
});

export const BookingList = styled('div', {
    flex: '20',
    backgroundColor: '$gray_200',
    borderLeft: '1px solid $gray_300',
    borderRight: '1px solid $gray_300',
});

export const WeekDays = styled('div', {
    flex: '20',
    borderLeft: '1px solid $gray_300',
    borderRight: '1px solid $gray_300',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const DayName = styled('text', {
    color: '$blue_800',
    fontSize: '$md',
    fontWeight: '700'
});

export const DayNumber = styled('text', {
    color: '$blue_800',
    fontSize: '$md',
    fontWeight: '700'
});

export const HourNumber = styled('text', {
    flex: 'auto',
    color: '$blue_800',
    fontSize: '$sm',
    fontWeight: '700',
    textAlign: 'center',
});