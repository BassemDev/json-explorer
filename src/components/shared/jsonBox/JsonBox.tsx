import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../constants/colors";
import { MARGIN, PADDING } from "../../../constants/spacing";
import { JsonRenderer } from "./JsonRenderer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: ${MARGIN.LARGE};
`;

const ResponseWrapper = styled.div`
  padding: ${PADDING.SMALL};
  margin-top: ${MARGIN.SMALL};

  background: ${COLORS.WHITE};
  border: 1px solid ${COLORS.DEEP_GREY};
  border-radius: 10px;
`;

interface Props {
  data: Object;
  handleClick: (text: string) => void;
}

export const JsonBox: React.FunctionComponent<Props> = ({
  data,
  handleClick,
}) => {
  return (
    <Wrapper>
      <span>Response</span>
      <ResponseWrapper>
        <JsonRenderer data={data} handleClick={handleClick} />
      </ResponseWrapper>
    </Wrapper>
  );
};
