import { styled } from "styled-components";
import { FiStar } from 'react-icons/fi'

export const Container = styled.button`
  width: 100%;
  border: none;
  max-height: 22rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  border-radius: 1.6rem;
  margin-top: 2.4rem;
  padding: 3.2rem;
  grid-area: content;

  > textarea {
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    border: none;
    resize: none;
    margin-bottom: 1.5rem;
    overflow: hidden;
  }

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  .stars {
    display: flex;
    gap: .5rem;
    margin: 1rem 0 1rem 0;
    color: gold;
  }
`;