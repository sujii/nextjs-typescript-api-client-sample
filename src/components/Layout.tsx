import React, { useEffect } from "react";
import { NextPage } from "next";

export type NextPageWithLayout = NextPage & {
  Layout?: React.FC;
};

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = (props) => {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};
