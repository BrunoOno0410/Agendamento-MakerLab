import { MainDiv } from './styles';
import { NavBar } from '../../components/navBar/navBar';
import { AdminBarComponent } from "../../components/adminBar/adminBar";

export const AdmNotif = () => {
  return (
    <>
      <NavBar isAdmin/>
      <MainDiv>
        <AdminBarComponent admNotif/>
      </MainDiv>
    </>
  );
};

