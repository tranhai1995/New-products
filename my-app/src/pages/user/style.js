import styled from "styled-components";
import { Layout } from "antd";
const { Content } = Layout;

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
  .img-container {
    position: relative;
    overflow: hidden;
    padding: 24px;
  }

  .img-container {
    transition: all 0.5s linear;
    :hover {
      transform: scale(1.2);
    }
  }

  .card-btn {
    letter-spacing: 0;
  }

  .card-btn:hover,
  .card-btn:active {
    letter-spacing: 5px;
  }

  .card-btn:after,
  .card-btn:before {
    backface-visibility: hidden;
    border: 1px solid rgba(#fff, 0);
    bottom: 0px;
    content: " ";
    display: block;
    margin: 0 auto;
    position: relative;
    transition: all 280ms ease-in-out;
    width: 0;
  }

  .card-btn:hover:after,
  .card-btn:hover:before {
    backface-visibility: hidden;
    border-color: #fff;
    transition: width 350ms ease-in-out;
    width: 70%;
  }

  .card-btn:hover:before {
    bottom: auto;
    top: 0;
    width: 70%;
  }
`;

export const ContentStyle = styled(Content)`
  width: 100%;
  padding: 5px;
  .card-item {
    flex-wrap: wrap;
    justify-content: center;
  }
  .item-product {
    padding: 16px;
  }
`;
