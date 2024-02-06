import React, { useState } from "react";
import styled from "styled-components";

import { Hint } from "../hint/Hint";
import { COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/spacing";
import { TEXT_FIELD_CONSTANTS } from "./constants";

const StyledInput = styled.input`
  margin-top: 2px;
  margin-bottom: 4px;
  padding: ${PADDING.SMALL};

  border: 1px solid ${COLORS.DEEP_GREY};
  border-radius: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  label: string;
  placeHolder?: string;
  hintMessage: string;
  updateHint: (text: string) => void;
}

export const TextField: React.FunctionComponent<Props> = ({
  label,
  placeHolder = TEXT_FIELD_CONSTANTS.GENERAL_MESSAGE,
  hintMessage,
  updateHint,
}) => {
  const [value, setValue] = useState<string>("");

  const handleOnchange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    if (e.currentTarget.value.indexOf("res.") !== -1) {
      const path = e.currentTarget.value.substring(
        e.currentTarget.value.indexOf("res") + 4,
      );
      updateHint(path);
    } else {
      updateHint("");
    }
  };

  return (
    <Wrapper>
      <label htmlFor="Property">{label}</label>
      <StyledInput
        id="Property"
        value={value}
        placeholder={placeHolder}
        onChange={handleOnchange}
      />
      <Hint message={hintMessage} />
    </Wrapper>
  );
};
