import { MainDiv, StatDiv } from './styles';
import { NavBar } from '../../components/navBar/navBar';
import { AdminBarComponent } from "../../components/adminBar/adminBar";

export const AdmStat = () => {
  return (
    <>
      <NavBar isAdmin/>
      <MainDiv>
        <AdminBarComponent admStat/>
          <StatDiv>
            oi
          </StatDiv>
      </MainDiv>
    </>
  );
};

