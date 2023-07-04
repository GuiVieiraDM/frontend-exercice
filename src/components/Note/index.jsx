import { Container } from './style'
import { Tag } from '../Tag'
import { FiStar } from 'react-icons/fi'

export function Note({ data, ...rest}) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {/* The div bellow will be improved in the final project where will be integrated with the backend, for now its just graphic and useless */}
      <div className='stars'><FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></div>
      <textarea name="description" id="description" cols="30" rows="2" readOnly>{data.description}</textarea>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  );
};