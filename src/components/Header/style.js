import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2.4rem 0rem;
  height: 11.6rem;
  width: 100%;

  border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BORDER};

  > h1 {
    color: ${({ theme }) => theme.COLORS.GREEN};
  }

  > .input {
    width: 63rem;
  }

`;

export const Profile = styled.div`
  display: flex;
  gap: .9rem;
  align-items: center;
 

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: .2rem solid ${({ theme }) => theme.COLORS.BORDER};
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    > strong {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    };

  }
`;

export const Logout = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  flex-direction: row-reverse;
`;