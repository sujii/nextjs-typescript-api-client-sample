import { FC } from "react";
import styled from "styled-components";
import { colorBase } from "../style";

export type HeadingProps = {
  heading: string;
};

const Component: FC<HeadingProps & { className?: string }> = ({
  className,
  heading,
}) => {
  return <h1 className={className}>{heading}</h1>;
};

export const Heading: FC<HeadingProps> = styled(Component)`
  grid-column-start: 1;
  grid-column-end: -1;
  padding: 0 0 30px;
  text-align: center;
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colorBase.white};
`;
