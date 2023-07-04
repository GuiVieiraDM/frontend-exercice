import { Container, Form, Background } from './style';
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Registre suas reviews de filmes!</p>
        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          type="text"
          placeholder="Nome"
        />
        <Input 
          icon={FiMail}
          type="email"
          placeholder="E-mail"
        />
        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button
          title="Cadastrar"
        />

        <a href="/">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Form>
    </Container>
  )
}