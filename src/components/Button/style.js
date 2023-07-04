import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  grid-area: button;
  border: 0;
  border-radius: 1rem;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-size: 2.6rem;
  }
`;