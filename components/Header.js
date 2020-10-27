import styled from "styled-components";

const Header = styled.header`
  & > h1 {
    margin-bottom: 16px;
  }

  & > h2 {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    max-width: 800px;
  }

  & > h2 + h2 {
    margin-top: 24px;
  }

  @media screen and (max-width: 700px) {
    & > h2 {
      font-size: 1.2rem;
    }
  }
`;

export default Header;
