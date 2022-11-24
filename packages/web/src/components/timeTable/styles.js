import { styled } from "../../styles/theme";

export const TimeTable = styled('div', {
    backgroundColor: '$gray_100',
    height: '95%',
    width: '97%',
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
    backgroundColor: '$blue_300',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    'div': {
        flex: '1',
    },
    'button': {
        flex: '1',
        backgroundColor: '$blue_100',
        color: '$blue_800',
        fontWeight: 'bold',
    }
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