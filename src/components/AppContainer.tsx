import { FC } from "react";
import { useSubscribeAuthStateChanged } from "../modules/auth";

type AppContainerProps = {};

/**
 * アプリケーション全体に対する処理を行うコンポーネント
 *
 * デザインは関知しない
 * ログイン状態の監視、反映等の処理を行う
 */
export const AppContainer: FC<AppContainerProps> = (props) => {
  useSubscribeAuthStateChanged();

  return <>{props.children}</>;
};
