import React from "react";
import style, { css } from "styled-components";
import { FiMoreVertical } from "react-icons/fi";

export const MoreVertical = style(({ ...props }) => (
  <FiMoreVertical {...props} />
))`
  &&& {
    font-size: ${(props) => props.zise || 20}px;
    ${(props) =>
      props.primary &&
      css`
        color: #4b79a1;
      `}
  }
`;
