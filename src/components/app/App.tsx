// Module Imports
import React, { useState } from "react";

// Types import
import { DataModel } from "../../API/types";

// Internal imports
import { SAMPLE } from "../../API/data";
import { TextField } from "../shared/textfield/TextField";
import { jsonPathToValue } from "../../helpers/jsonHelpers";
import { JS_BASIC_TYPES } from "../../types/jsTypesenums";
import { JsonBox } from "../shared/jsonBox/JsonBox";

export const App: React.FunctionComponent = () => {
  const [res] = useState<DataModel>(SAMPLE);
  const [hint, setHint] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string>("");

  const updateHint = (path: string) => {
    // We need to substract the res word from the event
    // If this is NOT present then no need to run the operation
    const test = jsonPathToValue(path, res);
    // The value assigned to the hint should be of basic type
    if (
      [
        JS_BASIC_TYPES.string,
        JS_BASIC_TYPES.number,
        JS_BASIC_TYPES.date,
        JS_BASIC_TYPES.boolean,
        JS_BASIC_TYPES.undefined,
        JS_BASIC_TYPES.null,
      ].includes(typeof test as JS_BASIC_TYPES)
    ) {
      setHint(test);
    } else {
      setHint(undefined);
    }
  };

  const handleJSONResponseClick = (path: string) => {
    setInputValue(path);
    const pathWithoutSuffix = path.substring(path.indexOf("res") + 4);
    updateHint(pathWithoutSuffix);
  };

  return (
    <>
      <TextField
        label="Property"
        inputValue={inputValue}
        hintMessage={String(hint)}
        placeHolder="Property"
        updateHint={updateHint}
        setInputValue={setInputValue}
      />
      <JsonBox data={res} handleClick={handleJSONResponseClick} />
    </>
  );
};
