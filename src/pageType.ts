import { NextPage } from "next";
import { FC } from "react";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  Layout?: FC;
};
