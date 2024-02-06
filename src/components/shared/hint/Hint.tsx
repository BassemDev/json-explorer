import React from "react";
import styled from "styled-components";

import { COLORS } from "../../../constants/colors";

const StyledSmall = styled.small`
  color: ${COLORS.GREY};
`;

interface Props {
  message: string;
}

export const Hint: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <StyledSmall id="username-help" data-testid="hint">
      {message}
    </StyledSmall>
  );
};
