import React, { useEffect, useState, useCallback } from "react";
import { useIntersection } from "../../../hooks/scroll";
import { InformationSummary } from "../../../openapi/model/information-summary";
import CircleLoader from "../../atoms/loader/CircleLoader";
import Margin from "../../atoms/spacing/Margin";
import CSS from "./InfoList.scss";
import InfoListItem from "./InfoListItem";

export type InfoListProps = {
  infoList: InformationSummary[];
  onLoadNext: () => void;
  hasNext: boolean;
  categoryName: string;
  isLoading: boolean;
};

const InfoList: React.FC<InfoListProps> = (props) => {
  const { infoList, onLoadNext, hasNext, categoryName, isLoading } = props;

  const [loaderElement, setLoaderElement] = useState<HTMLDivElement | null>(
    null
  );

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setLoaderElement(node);
    }
  }, []);

  const isIntersection = useIntersection(loaderElement, {
    rootMargin: "0px",
    threshold: 0.8,
  });

  useEffect(() => {
    if (isIntersection && infoList.length > 0) {
      onLoadNext();
    }
  }, [infoList.length, isIntersection, onLoadNext]);

  const showCircleLoader = hasNext && !isLoading;

  return (
    <>
      <div>
        {infoList &&
          infoList.map((item) => {
            return (
              <Margin y={2} key={item.informationId}>
                <InfoListItem info={item} categoryName={categoryName} />
              </Margin>
            );
          })}
      </div>
      {showCircleLoader && (
        <div ref={measuredRef} className={CSS.loader}>
          <CircleLoader />
        </div>
      )}
    </>
  );
};

export default InfoList;
