import styled from "styled-components";

import Link from "next/link";

import ClickableLink from "./ClickableLink";

export default function ProjectPreview({ data: { title, description, link, image } }) {
  return (
    <Link href={link} passHref>
      <StyledProjectPreview target="_blank">
        <Image alt="Project image" src={"images/" + image} />
        <Title>
          <ClickableLink newTab href={link}>
            {title}
          </ClickableLink>
        </Title>
        <p>{description}</p>
      </StyledProjectPreview>
    </Link>
  );
}

const StyledProjectPreview = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const Title = styled.h3`
  margin-bottom: 4px;
`;
