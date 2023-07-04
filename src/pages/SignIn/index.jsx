import { Container, Form, Background } from './style';
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Registre suas reviews de filmes!</p>
        <h2>Faça seu login</h2>

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
          title="Entrar"
        />

        <a href="/">Criar conta</a>
      </Form>

      <Background />
    </Container>
  )
}