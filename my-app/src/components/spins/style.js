import styled from "styled-components";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const CustomSpin = styled(Spin)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomIcon = styled(LoadingOutlined)`
  font-size: 24px;
`;
