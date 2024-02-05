// Module Imports
import React, { useState } from "react";

// Types import
import { DataModel } from "../../API/types";

// Internal imports
import { SAMPLE } from "../../API/data";

export const App: React.FunctionComponent = () => {
  const [data] = useState<DataModel>(SAMPLE);

  return <div>{JSON.stringify(data)}</div>;
};
