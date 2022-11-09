import { ArrowBack, ArrowForward, DateControl, Logout, LogoutDiv, MainDiv, Month, TimeTable, UpperMenu } from './styles';
import LogoFacamp from '../../assets/facampLogo.png'
import ArrowIconF from '../../assets/arrowForward.svg'
import ArrowIconB from '../../assets/arrowBack.svg'
import LogoutIcon from '../../assets/logout.svg'

export const BookingPage = () => {
  return (
    <>
      <UpperMenu>
        <img src={LogoFacamp} alt="Logotipo Facamp" />
        <DateControl>
          <ArrowBack>
            <img src={ArrowIconB} alt="Logo Flecha pra trás" />
          </ArrowBack>
          <ArrowForward>
            <img src={ArrowIconF} alt="Logo Flecha pra frente" />
          </ArrowForward>
          <Month>Outubro</Month>
          <h2>de 2022</h2>
        </DateControl>
        <LogoutDiv>
          <img src={LogoutIcon} alt="Logo Logout" />
        </LogoutDiv>
      </UpperMenu>
      <MainDiv>
      </MainDiv>
    </>
  );
};

