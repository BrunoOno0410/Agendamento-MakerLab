import { getData } from '../../api';
import { BookingPopUp } from '../bookingPopUp/bookingPopUp';
import { UpperTimeTable, LowerTimeTable, TimeTable, HourTimeTable, DayTimeTable, WeekDays, DayName, DayNumber, BookingList, UpperDownTimeTable, HourNumber } from './styles';
import { format, addDays } from 'date-fns';
import { getWeekAndYear } from '../../services';

export const TimeTableComponent = ({week, year}) => {

    const { getDateOfISOWeek } = getWeekAndYear()
    
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
                    <BookingList>
                        {Object.keys(data.tue['08']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['08']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['09']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['09']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['10']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['10']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['11']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['11']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['12']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['12']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['13']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['13']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['14']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['14']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['15']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['15']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['16']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['16']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['17']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['17']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['18']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['18']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.tue['19']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.tue['19']}/>
                                </button>
                            </>
                        ) : <div></div>}
                    </BookingList>
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
                    <BookingList>
                        {Object.keys(data.thu['08']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['08']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['09']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['09']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['10']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['10']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['11']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['11']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['12']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['12']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['13']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['13']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['14']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['14']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['15']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['15']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['16']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['16']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['17']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['17']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['18']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['18']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.thu['19']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.thu['19']}/>
                                </button>
                            </>
                        ) : <div></div>}
                    </BookingList>
                    <BookingList style={{borderRight: 'none', borderBottomRightRadius: '1rem'}}>
                    {Object.keys(data.fri['08']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['08']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['09']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['09']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['10']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['10']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['11']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['11']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['12']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['12']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['13']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['13']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['14']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['14']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['15']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['15']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['16']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['16']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['17']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['17']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['18']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['18']}/>
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.fri['19']).length != 0 ? (
                            <>
                                <button>
                                    <BookingPopUp data={data.fri['19']}/>
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
