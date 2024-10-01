import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  Row,
  UserPicture,
  Wrapper,
} from './styles';
import { IHeader } from './types';

const Header = ({ autenticado }: IHeader) => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  };

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickSignUp = () => {
    navigate('/Signup');
  };
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" onClick={handleClickHome} />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/101157962?s=400&u=1e8120194ed5bc403a6a2fb61e90b70064bd73a5&v=4" />
          ) : (
            <Row>
              <Button title="Entrar" onClick={handleClickSignIn} />
              <Button title="Cadastrar" onClick={handleClickSignUp} />
            </Row>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
