import { styled } from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: .5rem 1.6rem;
  border-radius: .8rem;
  margin-right: .8rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;