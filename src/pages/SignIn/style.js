import { styled } from "styled-components";
import  backgroundImg  from '../../assets/cinema.png'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  text-align: left;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GREEN}
  }

  > P {
    font-size: 1.4rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    margin: 4.8rem 0;
  }

  > a {
    margin-top: 4.2rem;
    color: ${({ theme }) => theme.COLORS.GREEN};
    font-size: 1.6rem;
    align-self: center;
  }
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center center;
  flex: 1;
  background-size: cover;
  filter: brightness(.5);
`;