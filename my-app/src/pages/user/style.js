import styled from "styled-components";
import { Layout, Col } from "antd";
const { Header, Content } = Layout;

export const HeaderUser = styled(Header)`
  background-color: #fff !important;
  display: flex;
  .logo {
    width: calc(20% - 164px);
    height: calc(10%);
    text-align: center;
  }
  .button-right {
    border-left: 1px solid;
  }
  .ant-menu {
    margin-left: 40px;
    display: flex;
    .ant-menu-item {
      height: 64px;
    }
  }
  .ant-input-affix-wrapper {
    border-left: 3px solid #00c6d7;
  }
`;

export const ContentStyle = styled(Content)`
  width: 100%;
  padding: 5px;
  .card-item {
    width: calc(100% - 8px);
  }
  .item-product {
    padding: 16px 16px 0px 0px;
  }
`;

export const Shop = styled(Col)`
  margin-left: 100px;
  margin-top: 8px;
`;
