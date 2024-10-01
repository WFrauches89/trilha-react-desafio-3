import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

import {
  Column,
  Container,
  InfoText,
  InfoText2,
  InfoText2Span,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './styles';
import { IFormData } from './types';

const schema = yup
  .object({
    username: yup.string().required('Campo obrigatório'),
    email: yup
      .string()
      .email('email não é valido')
      .required('Campo obrigatório'),
    password: yup
      .string()
      .min(3, 'No minimo 3 caracteres')
      .required('Campo obrigatório'),
  })
  .required();

const Signup = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login');
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data: existingUsers } = await api.get(
        `users?email=${formData.email}`,
      );

      if (existingUsers.length > 0) {
        alert('E-mail já cadastrado. Por favor, use outro e-mail.');
        return;
      }
      const { data: users } = await api.get('users');
      const newId = users.length ? users[users.length - 1].id + 1 : 1;

      const newUser = {
        id: newId,
        name: formData.username,
        email: formData.email,
        senha: formData.password,
      };

      await api.post('users', newUser);

      alert('Conta criada com sucesso!');
      navigate('/login');
    } catch (error) {
      alert('Houve um erro ao criar a conta, tente novamente.');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="username"
                errorMessage={errors?.username?.message}
                control={control}
                placeholder="Nome Completo"
                leftIcon={<MdPerson />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Column>
              <InfoText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </InfoText>
              <InfoText2>
                Já tenho conta.{' '}
                <InfoText2Span onClick={handleClickSignIn}>
                  Fazer login
                </InfoText2Span>
              </InfoText2>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Signup };
