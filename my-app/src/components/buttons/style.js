import styled from "styled-components";
import { Button, Popover } from "antd";

export default styled(Popover)`
  &&& {
    @media (min-width: 576px) {
      display: none;
    }
  }
`;

export const ButtonIcon = styled(Button)`
  &&& {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 576px) {
      display: none;
    }
  }
`;
