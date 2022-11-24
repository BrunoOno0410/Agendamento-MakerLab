import { Link } from "react-router-dom";
import { FiBarChart2, FiBell, FiHome } from "react-icons/fi"
import { AdmMenu, MenuButton } from './styles';

export const AdminBarComponent = (props) => {
    return (
        <AdmMenu>
          <Link to='/admin'>
            <MenuButton style={props.admHome ? {backgroundColor: '#c8cdd1', border: '1px solid #5f7280', paddingLeft: '0.5rem', paddingRight: '0.5rem'} : {}}>
              <FiHome size={"3rem"} color={"#063859"}/>
            </MenuButton>
          </Link>
          <Link to='/adminstat'>
            <MenuButton style={props.admStat ? {backgroundColor: '#c8cdd1', border: '1px solid #5f7280', paddingLeft: '0.5rem', paddingRight: '0.5rem'} : {}}>
              <FiBarChart2 size={"3rem"} color={"#063859"}/>
            </MenuButton>
          </Link>
          <Link to='/adminnotif'>
            <MenuButton style={props.admNotif ? {backgroundColor: '#c8cdd1', border: '1px solid #5f7280', paddingLeft: '0.5rem', paddingRight: '0.5rem'} : {}}>
              <FiBell size={"3rem"} color={"#063859"}/>
            </MenuButton>
          </Link>
          
        </AdmMenu>
    )
}