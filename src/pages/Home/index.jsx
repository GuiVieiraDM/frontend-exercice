import { Container, Content } from './style';
import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />
      <section>
        <h1>Meus filmes</h1>
        <Button 
          type="button"
          title="Adicionar filme"
          icon={<FiPlus/>}
        ></Button>
      </section>
      <Content>
        <Note data={{
          title: 'Star Wars: O império contra ataca',
          description: 'Star Wars: Episódio V - O Império Contra-Ataca (em inglês: Star Wars: Episode V - The Empire Strikes Back), é um filme épico/space opera norte-americano de 1980 dirigido por Irvin Kershner e escrito por Leigh Brackett e Lawrence Kasdan, com base na história de George Lucas, sendo o segundo filme da saga Star Wars a ser lançado, embora seja o quinto na ordem cronológica. O filme é ambientado três anos depois de Guerra nas Estrelas. O Império Galáctico, sob a liderança do vilão Darth Vader e do misterioso Imperador, está em busca de Luke Skywalker e o resto da Aliança Rebelde. Enquanto Vader procura incansavelmente o pequeno grupo de amigos de Luke — Han Solo, Princesa Leia Organa e outros — através da galáxia, Luke é ensinado pelo Mestre Yoda a como usar a Força. Quando Vader captura os amigos de Luke, Luke deve decidir se vai completar seu treinamento e se tornar um Cavaleiro Jedi completo ou confrontar Vader e salvá-los.',
          tags: [
            {id: '1', name: 'ficção'},
            {id: '2', name: 'aventura'}
          ]
        }} />
        <Note data={{
          title: 'Harry Potter e o Prisioneiro de Azkaban',
          description: 'Harry Potter and the Prisoner of Azkaban (no Brasil e em Portugal, Harry Potter e o Prisioneiro de Azkaban) é um filme britânico-americano de 2004, dirigido por Alfonso Cuarón, baseado no livro de mesmo nome escrito por J. K. Rowling.[2] É o terceiro filme da série Harry Potter, tendo roteiro de Steve Kloves e produção de Chris Columbus, David Heyman e Mark Radcliffe. O filme é estrelado por Daniel Radcliffe como Harry Potter, juntamente com Rupert Grint e Emma Watson como os melhores amigos de Harry, Ronald Weasley e Hermione Granger. É o início do terceiro ano na escola de bruxaria Hogwarts. Harry, Ron e Hermione têm muito o que aprender. Mas uma ameaça ronda a escola e ela se chama Sirius Black. Após doze anos encarcerado na prisão de Azkaban, ele consegue escapar e volta para vingar seu mestre, Lord Voldemort. Para piorar, os Dementores, guardas supostamente enviados para proteger Hogwarts e seguir os passos de Black, parecem ser ameaças ainda mais perigosas.',
          tags: [
            {id: '3', name: 'saga'},
            {id: '2', name: 'aventura'}
          ]
        }} />
      </Content>
    </Container>
  );
};