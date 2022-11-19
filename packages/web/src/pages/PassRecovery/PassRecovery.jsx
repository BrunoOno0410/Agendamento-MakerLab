import { CenterDiv, MainContainer, FormContainer, Input, LoginButton } from './styles';
import LogoFacamp from '../../assets/logoFacamp.png'

export const PassRecovery = () => {
  return (
    <>
      <MainContainer>
        <CenterDiv>
            <h2>Recuperar senha</h2>
            <h3>Não se preocupe, acontece com todo mundo</h3>
          <FormContainer>
            <div>   
                <label htmlFor='userContainer'>E-mail</label><br />
                <Input placeholder='Digite seu e-mail' type='text' id='userContainer'/>
            </div>
                <LoginButton>Recuperar minha senha</LoginButton>
          </FormContainer>
        </CenterDiv>
      </MainContainer>
    </>
  );
};

