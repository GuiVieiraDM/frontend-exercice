import { styled } from 'styled-components';

export const Container = styled.div`

  > section {
    padding: 0 11.5rem;
    margin-top: 4.7rem;
    display: flex;
    justify-content: space-between;

    > button {
      margin-top: 0;
      max-width: 22rem;
      justify-self: end;
    }
    
    > h1 {
      font-weight: 400;
      grid-area: title;
      align-self: center;
      font-size: 3.2rem;
    }
  }
`;

export const Content = styled.div`
  padding: 0 2rem 6rem 11.5rem;
  margin-right: 12rem;
  margin-top: 2rem;
  overflow-y: auto;
  max-height: 68.8rem;

  &::-webkit-scrollbar {
    width: .8rem;
    background: transparent;
    border-radius: 1rem;
    scroll-behavior: smooth;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 1rem;
    margin-right: 10rem;
  }

`;