import { ArrowBack, ArrowForward, DateControl, UpperTimeTable, LowerTimeTable, Logout, MainDiv, Month, TimeTable, UpperMenu, Year, HourTimeTable, DayTimeTable, WeekDays, DayName, DayNumber, BookingList, UpperDownTimeTable, HourNumber } from './styles';
import LogoFacamp from '../../assets/facampLogo.png'
import ArrowIconF from '../../assets/arrowForward.svg'
import ArrowIconB from '../../assets/arrowBack.svg'
import LogoutIcon from '../../assets/logout.svg'

export const BookingPage = () => {
  return (
    <>
      <UpperMenu>
        <img src={LogoFacamp} alt="Logotipo Facamp" />
        <DateControl>
          <ArrowBack>
            <img src={ArrowIconB} alt="Logo Flecha pra trás" />
          </ArrowBack>
          <ArrowForward>
            <img src={ArrowIconF} alt="Logo Flecha pra frente" />
          </ArrowForward>
          <Month>Outubro</Month>
          <Year>de 2022</Year>
        </DateControl>
        <Logout>
          <img src={LogoutIcon} alt="Logo Logout" />
        </Logout>
      </UpperMenu>
      <MainDiv>
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
              <HourNumber>20:00</HourNumber>
              <HourNumber>21:00</HourNumber>

            </HourTimeTable>
            <DayTimeTable>
              <BookingList></BookingList>
              <BookingList></BookingList>
              <BookingList></BookingList>
              <BookingList></BookingList>
              <BookingList></BookingList>
            </DayTimeTable>
          </LowerTimeTable>
        </TimeTable>
      </MainDiv>
    </>
  );
};

