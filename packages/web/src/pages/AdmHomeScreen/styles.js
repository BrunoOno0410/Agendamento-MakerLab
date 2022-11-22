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

export const Calendar = styled('')

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

export const DayName = styled('p', {
    color: '$blue_800',
    fontSize: '$md',
    fontWeight: '700'
});

export const DayNumber = styled('p', {
    color: '$blue_800',
    fontSize: '$md',
    fontWeight: '700'
});

export const HourNumber = styled('p', {
    flex: 'auto',
    color: '$blue_800',
    fontSize: '$sm',
    fontWeight: '700',
    textAlign: 'center',
});