import Link from "next/link";
import styled from "styled-components";

export default function ClickableLink({ href, newTab, children }) {
  return (
    <Link href={href} passHref>
      <StyledLink target={newTab ? "_blank" : "_self"}>{children}</StyledLink>
    </Link>
  );
}

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  margin: -2px -8px;
  border-radius: 8px;
  transition: all 100ms ease-in-out;
  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
