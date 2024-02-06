import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../constants/colors";
import { MARGIN } from "../../../constants/spacing";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: ${MARGIN.SMALL};
`;

const StyledPre = styled.pre`
  margin-top: 5px;
`;

const KeyStyle = styled.span`
  margin-right: ${MARGIN.SMALL};

  color: ${COLORS.BLUE};
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;

interface Props {
  attribute: string;
  value: string | Date | Object[] | boolean | number;
  handleOnclick: (path: string) => void;
}

export const JsonLabelValue: React.FunctionComponent<Props> = ({
  attribute,
  value,
  handleOnclick,
}) => {
  return (
    <Wrapper>
      <KeyStyle onClick={() => handleOnclick("res." + attribute)}>
        {attribute}
      </KeyStyle>
      {typeof value === "object" ? (
        <StyledPre>{JSON.stringify(value, undefined, 2)}</StyledPre>
      ) : (
        <span>: {JSON.stringify(value)}</span>
      )}
    </Wrapper>
  );
};
