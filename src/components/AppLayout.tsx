import { FC } from "react";
import styled from "styled-components";

type AppLayoutProps = {};

/**
 * 全ページ共通Layoutコンポーネント
 *
 * ページごとに変更があるコンポーネントはAppLayoutではなくページごとのLayoutコンポーネントで配置する
 */
const Component: FC<AppLayoutProps & { className?: string }> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export const AppLayout: FC<AppLayoutProps> = styled(Component)`
  width: 100%;
  min-width: 320px;
  height: 100%;
`;
