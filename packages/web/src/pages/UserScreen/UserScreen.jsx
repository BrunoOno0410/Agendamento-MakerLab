import { ArrowBack, ArrowFoward, Logout, LogoutDiv, Month, UpperMenu } from './styles';
import LogoFacamp from '../../assets/facampLogo.png'

export const BookingPage = () => {
  return (
    <>
      <UpperMenu>
        <img src={LogoFacamp} alt="Logotipo Facamp" />
        <ArrowBack>Flecha</ArrowBack>
        <ArrowFoward>Flecha</ArrowFoward>
        <Month>Outubro</Month>
        <h2>de 2022</h2>
        <LogoutDiv>
            <Logout>Logout</Logout>
        </LogoutDiv>
      </UpperMenu>
    </>
  );
};

