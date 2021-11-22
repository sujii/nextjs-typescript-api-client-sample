import { AxiosError } from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddModal } from "../modules/modal";
import { AddToastAction } from "../modules/toast";

export const useDetectOffline = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const callback = () => {
      dispatch(
        AddToastAction({
          title: "エラー",
          content: "ネットワークに接続されていません",
        })
      );
    };

    window.addEventListener("offline", callback);
    return () => {
      window.removeEventListener("offline", callback);
    };
  }, [dispatch]);
};

export const useNetworkError = () => {
  const dispatch = useDispatch();
  const handleNetworkError = useCallback(
    (error: AxiosError) => {
      if (error.message === "Network Error") {
        dispatch(AddModal({ type: "ERROR", message: "ネットワークエラー" }));
        return Promise.resolve();
      }
      return Promise.reject(error);
    },
    [dispatch]
  );
  return { handleNetworkError };
};
