import styled from "styled-components";
import { Layout } from "antd";

export const CollLeft = styled(Layout)`
  .ant-layout-sider-trigger {
    background-color: #f0f2f5;
  }
  .logo {
    height: 64px;
    width: 200px;
    text-align: center;
    font-size: 40px;
    background-color: #fff;
  }
  .ant-radio-wrapper {
    padding: 0 10px;
    display: block;
    height: 30px;
    .ant-radio-inner {
      .text {
        color: #fff;
      }
    }
  }
  .ant-btn {
    width: calc(100%);
  }
  .anticon-shopping-cart {
    margin-right: 15px;
  }
`;
