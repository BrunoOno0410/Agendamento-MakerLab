import { Container, Login, Booking, BookingButton, Input, LoginButton, FormContainer, PasswordRecoverButton, RecoverContainer } from './styles';
import LogoFacamp from '../../assets/logoFacamp.png'

export const LoginPage = () => {
  return (
    <>
      <Container>
        <Booking>
          <img src={LogoFacamp} alt="Logotipo Facamp" />
          <h2>MAKERLAB</h2>
          <BookingButton>RESERVAS</BookingButton>
        </Booking>
        <Login>
          <h2>Login</h2>
          <FormContainer>
            <div>   
                <label htmlFor='userContainer'>Usuário</label><br />
                <Input placeholder='Digite seu usuário' type='text' id='userContainer'/>
            </div>
            <div>
                <label htmlFor='passwordContainer'>Senha</label><br />
                <Input placeholder='Digite sua senha' type='password' id='passwordContainer'/><br />
                <RecoverContainer>
                    <PasswordRecoverButton>Esqueceu a senha?</PasswordRecoverButton>
                </RecoverContainer>
            </div>
                <LoginButton>Entrar</LoginButton>
          </FormContainer>
        </Login>
      </Container>
    </>
  );
};

