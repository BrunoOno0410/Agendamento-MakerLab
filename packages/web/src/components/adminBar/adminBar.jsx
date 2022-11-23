import { Link } from "react-router-dom";
import { FiBarChart2, FiBell, FiHome } from "react-icons/fi"
import { AdmMenu, MenuButton, MenuButtonClicked } from './styles';

export const AdminBarComponent = () => {
    return (
        <AdmMenu>
          <Link to='/admin'>
            <MenuButton>
              <FiHome size={"3rem"} color={"#063859"}/>
            </MenuButton>
          </Link>
          <Link to='/adminstat'>
            <MenuButtonClicked>
              <FiBarChart2 size={"3rem"} color={"#063859"}/>
            </MenuButtonClicked>
          </Link>
          <Link to='/adminnotif'>
            <MenuButton>
              <FiBell size={"3rem"} color={"#063859"}/>
            </MenuButton>
          </Link>
          
        </AdmMenu>
    )
}