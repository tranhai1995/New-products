import React from "react";
import style, { css } from "styled-components";
import { FiMoreVertical } from "react-icons/fi";
// import { CgLogOut } from "react-icons/cg";

export const MoreVertical = style(({ primary, ...props }) => (
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

// export const IconLogout = style(CgLogOut)`
//   color: #4b79a1;
//   font-size: 24px;
//   cursor: pointer;
//
// `;
