import { ArrowBack, ArrowForward, DateControl, Logout, Month, StyledLink, UpperMenu, Year, AddBooking} from './styles';
import LogoFacamp from '../../assets/facampLogo.png'
import { FiLogOut, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { PopUp } from "../popUp/popUp";
import { CalendarPopUp } from '../calendarPopUp/calendarPopUp';

export const NavBar = (props) => {
    return (
        <UpperMenu>
            <img src={LogoFacamp} alt="Logotipo Facamp" />
            <DateControl>
                <ArrowBack>
                    <FiChevronLeft size={"3rem"} color={"#063859"}/>
                </ArrowBack>
                <ArrowForward>
                    <FiChevronRight size={"3rem"} color={"#063859"}/>
                </ArrowForward>
                <Month>
                    <CalendarPopUp></CalendarPopUp>
                </Month>
                <Year>de 2022</Year>
            </DateControl>
            {props.isAdmin ? (
                <StyledLink to='/login'>
                    <Logout>
                        <FiLogOut size={"3rem"} color={"#063859"}/>
                    </Logout>
                </StyledLink>
            ) : (
                <AddBooking>
                    <PopUp></PopUp>
                </AddBooking>
            )}
        </UpperMenu>
    )
}