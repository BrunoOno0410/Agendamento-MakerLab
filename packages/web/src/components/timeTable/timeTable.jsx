import {useEffect, useState} from 'react'
import { getData } from '../../api';
import { UpperTimeTable, LowerTimeTable, TimeTable, HourTimeTable, DayTimeTable, WeekDays, DayName, DayNumber, BookingList, UpperDownTimeTable, HourNumber } from './styles';

export const TimeTableComponent = () => {
    //const [data, setData] = useState({})

        const data = getData()
    return (
    <>
        <TimeTable>
            <UpperTimeTable>
                <WeekDays className='Segunda'>
                    <DayNumber>07</DayNumber>
                </WeekDays>
                <WeekDays className='Terca'>
                    <DayNumber>08</DayNumber>
                </WeekDays>
                <WeekDays className='Quarta'>
                    <DayNumber>09</DayNumber>
                </WeekDays>
                <WeekDays className='Quinta'>
                    <DayNumber>10</DayNumber>
                </WeekDays>
                <WeekDays className='Sexta'>
                    <DayNumber>11</DayNumber>
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
                                    {
                                        data.mon['08'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['09']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['09'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['10']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['10'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['11']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['11'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['12']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['12'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['13']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['13'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['14']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['14'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['15']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['15'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['16']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['16'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['17']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['17'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['18']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['18'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                        {Object.keys(data.mon['19']).length != 0 ? (
                            <>
                                <button>
                                    {
                                        data.mon['19'].event.user.name
                                    }
                                </button>
                            </>
                        ) : <div></div>}
                    </BookingList>
                    <BookingList></BookingList>
                    <BookingList></BookingList>
                    <BookingList></BookingList>
                    <BookingList></BookingList>
                </DayTimeTable>
            </LowerTimeTable>
        </TimeTable>
    </>
    )
}
