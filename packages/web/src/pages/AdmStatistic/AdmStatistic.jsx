import { MainDiv, StatDiv } from './styles';
import { NavBar } from '../../components/navBar/navBar';
import { AdminBarComponent } from "../../components/adminBar/adminBar";
import { FiTool } from "react-icons/fi";

export const AdmStat = () => {
  
  return (
    <>
      <NavBar isAdmin/>
      <MainDiv>
        <AdminBarComponent admStat/>
          <StatDiv>
            <FiTool size={"18rem"} color={"#063859"}/>
            <h1>Em breve...</h1>
          </StatDiv>
      </MainDiv>
    </>
  );
};

