import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import { pagePath } from "../pagePath";
import { colorBase, colorText } from "../style";
import { assetPath } from "../utils/asset";
import { Image } from "./Image";

export type HeaderProps = {};

const Component: FC<HeaderProps & { className?: string }> = (props) => {

  return (
    <header className={props.className}>
    </header>
  );
};

export const Header: FC<HeaderProps> = styled(Component)`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 6px 40px 5px;
`;
