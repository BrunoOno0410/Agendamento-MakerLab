import { MainDiv } from './styles';
import { NavBar } from '../../components/navBar/navBar';
import { TimeTableComponent } from '../../components/timeTable/timeTable';

export const BookingPage = () => {
  return (
    <>
      <NavBar/>
      <MainDiv>
        <TimeTableComponent/>
      </MainDiv>
    </>
  );
};

