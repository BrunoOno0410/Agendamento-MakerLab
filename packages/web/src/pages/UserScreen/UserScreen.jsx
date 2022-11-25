import { MainDiv } from './styles';
import { NavBar } from '../../components/navBar/navBar';
import { TimeTableComponent } from '../../components/timeTable/timeTable';
import { getWeekAndYear } from '../../services';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR/index.js';
import { useState } from 'react';

export const BookingPage = () => {

  const {week, year, getDateOfISOWeek} = getWeekAndYear()
  const [weekState,setWeekState] = useState(week);
  
  const date = getDateOfISOWeek(weekState, year);

  const month = format(new Date(date),"MMMM 'de' yyyy",{ locale: ptBR })

    const addWeek = () => {
        setWeekState(parseInt(weekState)+1)
    }    

    const subWeek = () => {
        setWeekState(parseInt(weekState)-1)
    } 

  return (
    <>
      <NavBar useCalendar addWeek={addWeek} subWeek={subWeek} month={month} setWeekState={setWeekState}/>
      <MainDiv>
        <TimeTableComponent week={weekState} year={year}/>
      </MainDiv>
    </>
  );
};

