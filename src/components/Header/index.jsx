import { Container, Profile, Logout } from './style';
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <div className='input'>
        <Input
        type="text"
        placeholder="Pesquisar pelo título"
        />
      </div>


      <Profile>
        <div>
        <strong>Guilherme Vieira</strong>
        <Logout>Sair</Logout>
        </div>

        <img src="https://www.github.com/guivieiradm.png" alt="imagem de perfil do usuário" />
      </Profile>
    </Container>
  )
}