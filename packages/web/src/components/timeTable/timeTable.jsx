import { getData } from '../../api';
import { BookingPopUp } from '../bookingPopUp/bookingPopUp';
import { UpperTimeTable, LowerTimeTable, TimeTable, HourTimeTable, DayTimeTable, WeekDays, DayName, DayNumber, BookingList, UpperDownTimeTable, HourNumber } from './styles';
import { format, addDays } from 'date-fns';

export const TimeTableComponent = ({week, year}) => {

    function getDateOfISOWeek(w, y) {
        var simple = new Date(y, 0, 1 + (w - 1) * 7);
        var dow = simple.getDay();
        var ISOweekStart = simple;
        if (dow <= 4)
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        else
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        return ISOweekStart;
    }
    
    const day = getDateOfISOWeek(week, year)

    const data = getData()
    return (
    <>
        <TimeTable>
            <UpperTimeTable>
                <WeekDays className='Segunda'>
                    <DayNumber>{format(day, 'dd')}</DayNumber>
                </WeekDays>
                <WeekDays className='Terça'>
                    <DayNumber>{format(addDays(day, 1), 'dd')}</DayNumber>
                </WeekDays>
                <WeekDays className='Quarta'>
                    <DayNumber>{format(addDays(day, 2), 'dd')}</DayNumber>
                </WeekDays>
                <WeekDays className='Quinta'>
                    <DayNumber>{format(addDays(day, 3), 'dd')}</DayNumber>
                </WeekDays>
                <WeekDays className='Sexta'>
                    <DayNumber>{format(addDays(day, 4), 'dd')}</DayNumber>
                </WeekDays>
            </UpperTimeTable>
            <UpperDownTimeTable>
                <WeekDays className='Segunda'>
                    <DayName>Segunda</DayName>
                </WeekDays>
                <WeekDays className='Terca'>
                    <DayName>Terça</DayName>
                </WeekDays>
                <WeekDays className='Quarta'>
                    <DayName>Quarta</DayName>
                </WeekDays>
                <WeekDays className='Quinta'>
                    <DayName>Quinta</DayName>
                </WeekDays>
                <WeekDays className='Sexta'>
                    <DayName>Sexta</DayName>
                </WeekDays>
            </UpperDownTimeTable>
            <LowerTimeTable>
                <HourTimeTable>
                <HourNumber>8:00</HourNumber>
                <HourNumber>9:00</HourNumber>
                <HourNumber>10:00</HourNumber>
                <HourNumber>11:00</HourNumber>
                <HourNumber>12:00</HourNumber>
                <HourNumber>13:00</HourNumber>
                <HourNumber>14:00</HourNumber>
                <HourNumber>15:00</HourNumber>
                <HourNumber>16:00</HourNumber>
                <HourNumber>17:00</HourNumber>
                <HourNumber>18:00</HourNumber>
                <HourNumber>19:00</HourNumber>

                </HourTimeTable>
                <DayTimeTable>
                    <BookingList>{Object.keys(data.mon['08']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['08']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['09']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['09']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['10']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['10']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['11']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['11']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['12']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['12']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['13']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['13']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['14']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['14']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['15']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['15']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['16']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['16']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['17']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['17']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['18']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['18']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['19']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.mon['19']}/>
                                </button>
                            </>
                        ) : <div></div>}
                    </BookingList>
                    <BookingList></BookingList>
                    <BookingList>
                        {Object.keys(data.wed['08']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['08']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['09']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['09']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['10']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['10']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['11']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['11']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['12']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['12']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['13']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['13']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['14']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['14']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['15']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['15']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['16']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['16']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['17']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['17']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['18']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['18']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.wed['19']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.wed['19']}/>
                                </button>
                            </>
                        ) : <div></div>}
                    </BookingList>
                    <BookingList></BookingList>
                    <BookingList style={{borderRight: 'none', borderBottomRightRadius: '1rem'}}>
                    {Object.keys(data.fry['08']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['08']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['09']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['09']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['10']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['10']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['11']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['11']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['12']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['12']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['13']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['13']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['14']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['14']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['15']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['15']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['16']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['16']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['17']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['17']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['18']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['18']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fry['19']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fry['19']}/>
                                </button>
                            </>
                        ) : <div></div>}
                    </BookingList>
                </DayTimeTable>
            </LowerTimeTable>
        </TimeTable>
    </>
    )
}
