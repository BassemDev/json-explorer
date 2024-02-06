import React from "react";

import { JsonLabelValue } from "./JsonLabelValue";

interface Props {
  data: Object;
  handleClick: (text: string) => void;
}

export const JsonRenderer: React.FunctionComponent<Props> = ({
  data,
  handleClick,
}) => {
  return (
    <>
      {Object.entries(data).map((key, index) => (
        <JsonLabelValue
          key={index}
          attribute={key[0]}
          handleOnclick={handleClick}
          value={key[1]}
        />
      ))}
    </>
  );
};
