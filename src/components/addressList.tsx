import React, { useEffect, useState, useCallback } from "react";
// import CircleLoader from "../../atoms/loader/CircleLoader";
// import Margin from "../../atoms/spacing/Margin";
// import CSS from "./InfoList.scss";

export type InfoListProps = {
  infoList: string[];
  // onLoadNext: () => void;
  hasNext: boolean;
  categoryName: string;
  isLoading: boolean;
};

const InfoList: React.FC<InfoListProps> = (props) => {
  const { infoList, hasNext, categoryName, isLoading } = props;

  const [loaderElement, setLoaderElement] = useState<HTMLDivElement | null>(
    null
  );

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setLoaderElement(node);
    }
  }, []);

  const showCircleLoader = hasNext && !isLoading;

  return (
    <>
      <div>
        {infoList &&
          infoList.map((item) => {
            return (
              <div>
                {item}
              </div>
            );
          })}
      </div>
      {showCircleLoader && (
        <div>
          <p>Loading</p>
        </div>
      )}
    </>
  );
};

export default InfoList;
