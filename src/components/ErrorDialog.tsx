import { FC } from "react";
import { Dialog, DialogProps } from "./dialog/Dialog";
import { DialogContent } from "./dialog/DialogContent";
import { DialogTitle } from "./dialog/DialogTitle";

export type ErrorDialogProps = DialogProps & {
  title?: string;
  /**
   * エラー
   *
   * ダイアログに表示されるユーザ向けテキストには影響しない
   * 開発時のみ error.message や error.stack を表示するような機能があるとデバッグで便利そうなので props として用意
   */
  error: Error;
};

/**
 * エラーを表示するダイアログ
 *
 * API エラーはエラーコードを表示するため ApiErrorDialog を使ってください
 */
export const ErrorDialog: FC<ErrorDialogProps> = ({
  error,
  title = "エラー",
  children,
  ...dialogProps
}) => {
  return (
    <Dialog {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
