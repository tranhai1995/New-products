import styled from "styled-components";
import { Typography } from "antd";
import bannerUrl from "@zef/assets/images/banner.jpg";

export const LoginsStyle = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("${bannerUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  &&& {
    min-width: 450px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 32px;
    background-color: #ffffff;
    box-shadow: 0 6px 43px 0 rgba(0, 0, 0, 0.7);

    .forgot-password {
      text-align: center;
      margin-bottom: 8px;
    }

    .submit {
      padding-top: 16px;
      text-align: center;

      .ant-btn-primary {
        min-width: 150px;

        &:hover,
        &:focus {
          background-color: transparent;
          border: 1px solid #00c6d7;
          color: #00c6d7;
        }
      }
    }

    .register {
      text-align: center;
      margin: 0 !important;
      a {
        margin-left: 8px;
      }
    }

    @media (max-width: 576px) {
      min-width: auto;
      padding: 16px;
      width: calc(100% - 16px);
      margin-left: 8px;
      margin-right: 8px;
    }

    @media (max-height: 576px) {
      margin-top: 8px;
      margin-bottom: 8px;

      .submit {
        padding-top: 0;
        margin-bottom: 8px;
      }

      .forgot-password {
        margin-bottom: 0;
      }
    }
  }
`;

export const Title = styled(Typography.Title)`
  &&& {
    text-align: center;
    margin-bottom: 48px;
    color: #00c6d7;

    @media (max-height: 576px) {
      margin-bottom: 24px;
    }
  }
`;
