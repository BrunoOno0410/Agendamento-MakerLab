import { MainDiv, NotifDiv } from './styles';
import { NavBar } from '../../components/navBar/navBar';
import { AdminBarComponent } from "../../components/adminBar/adminBar";
import { FiTool } from "react-icons/fi";

export const AdmNotif = () => {
  return (
    <>
      <NavBar isAdmin/>
      <MainDiv>
        <AdminBarComponent admNotif/>
        <NotifDiv>
          <FiTool size={"18rem"} color={"#063859"}/>
          <h1>Em breve...</h1>
        </NotifDiv>
      </MainDiv>
    </>
  );
};

