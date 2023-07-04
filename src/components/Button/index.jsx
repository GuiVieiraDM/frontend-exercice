import { Container } from './style'

export function Button({ title, icon, loading = false, ...rest }) {
  return (
    <Container
      {...rest}
      disabled={loading}
      type="button"
    >
      { icon }
      { loading ? "Carregando..." : title  }
    </Container>
  )
}