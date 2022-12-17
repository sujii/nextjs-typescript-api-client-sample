import React, { useEffect } from "react";

export interface LayoutProps {
  address?: undefined;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      <div>{props.address}</div>
    </div>
  );
};
