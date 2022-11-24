import { MainDiv } from './styles';
import { NavBar } from '../../components/navBar/navBar';
import { TimeTableComponent } from '../../components/timeTable/timeTable';
import { AdminBarComponent } from "../../components/adminBar/adminBar";

export const AdmHome = () => {
  return (
    <>
      <NavBar isAdmin/>
      <MainDiv>
        <AdminBarComponent admHome/>
        <TimeTableComponent/>
      </MainDiv>
    </>
  );
};

