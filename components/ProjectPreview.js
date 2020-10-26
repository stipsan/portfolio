import styled from "styled-components";

import Link from "next/link";

import ClickableLink from "./ClickableLink";

export default function ProjectPreview({ data: { title, description, link, image } }) {
  return (
    <Link href={link} target="_blank">
      <div>
        <Image alt="Project image" src={"images/" + image} />
        <Title>
          <ClickableLink href={link} target="_blank">
            {title}
          </ClickableLink>
        </Title>
        <p>{description}</p>
      </div>
    </Link>
  );
}

const Image = styled.img`
  width: 100%;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  margin-bottom: 4px;
`;
