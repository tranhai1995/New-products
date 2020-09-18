import styled from "styled-components";
import { Layout, Col } from "antd";
const { Header, Content } = Layout;

export const LayoutWaper = styled(Layout)`
  .ant-tabs {
    background-color: #fff !important;
  }
  .ant-tabs-nav-wrap {
    justify-content: center;
    line-height: 41px;
  }
  .ant-tabs-nav {
    margin: 0 !important;
    padding: 0 8px;
  }
  .ant-input-affix-wrapper {
    border-left: 3px solid #00c6d7;
  }
`;

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
    width: 40%;
    margin-left: 40px;
    display: flex;
    justify-content: center;
    .ant-menu-item {
      height: 64px;
    }
  }
`;

export const ContentStyle = styled(Content)`
  width: 100%;
  padding: 5px;
  .card-item {
    flex-wrap: wrap;
  }
  .item-product {
    padding: 16px 12px 0px 0px;
  }
`;

export const Shop = styled(Col)`
  margin-left: 100px;
  margin-top: 8px;
`;
