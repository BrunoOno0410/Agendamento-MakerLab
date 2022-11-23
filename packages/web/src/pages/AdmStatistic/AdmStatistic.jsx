import { MainDiv, AdmMenu, MenuButton } from './styles';
import { FiBarChart2, FiBell, FiHome } from "react-icons/fi"
import { NavBar } from '../../components/navBar/navBar';
import { TimeTableComponent } from '../../components/timeTable/timeTable';

export const AdmStat = () => {
  return (
    <>
      <NavBar isAdmin/>
      <MainDiv>
        <AdmMenu>
          <MenuButton>
            <FiHome size={"3rem"} color={"#063859"}/>
          </MenuButton>
          <MenuButton>
            <FiBarChart2 size={"3rem"} color={"#063859"}/>
          </MenuButton>
          <MenuButton>
            <FiBell size={"3rem"} color={"#063859"}/>
          </MenuButton>
        </AdmMenu>
        <TimeTableComponent/>
      </MainDiv>
    </>
  );
};
