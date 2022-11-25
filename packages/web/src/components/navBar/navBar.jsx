import { ArrowBack, ArrowForward, DateControl, Logout, Month, StyledLink, UpperMenu, Year, AddBooking} from './styles';
import LogoFacamp from '../../assets/facampLogo.png'
import { FiLogOut, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { PopUp } from "../popUp/popUp";
import { CalendarPopUp } from '../calendarPopUp/calendarPopUp';

export const NavBar = (props) => {
    return (
        <UpperMenu>
            <img src={LogoFacamp} alt="Logotipo Facamp" />
            {props.useCalendar ? (
                <DateControl>
                <ArrowBack onClick={props.subWeek}>
                    <FiChevronLeft size={"3rem"} color={"#063859"}/>
                </ArrowBack>
                <ArrowForward onClick={props.addWeek}>
                    <FiChevronRight size={"3rem"} color={"#063859"}/>
                </ArrowForward>
                <Month>
                    <CalendarPopUp month={props.month} setWeekState={props.setWeekState}/>
                </Month>
                </DateControl>
            ) : <></>}
            
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