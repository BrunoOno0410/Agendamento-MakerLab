import { MainDiv } from './styles';
import { NavBar } from '../../components/navBar/navBar';
import { AdminBarComponent } from "../../components/adminBar/adminBar";

export const AdmStat = () => {
  return (
    <>
      <NavBar isAdmin/>
      <MainDiv>
        <AdminBarComponent/>
      </MainDiv>
    </>
  );
};

