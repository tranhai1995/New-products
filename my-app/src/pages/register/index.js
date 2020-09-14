import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";

import { LoginsStyle, Container, Title } from "./style";

import validationSchema from "./schema";

const LoginPage = () => {
  const handleSubmit = useCallback(() => {
    console.log("aaa");
  }, []);

  return (
    <LoginsStyle>
      <Container>
        <Title level={2}>REGISTER SHOPPING</Title>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form name="dynamic_rule">
            <Form.Item name="email">
              <Input
                name="email"
                className="zef-input"
                suffix={<UserOutlined />}
                placeholder="Email"
                autoComplete="new-email"
              />
            </Form.Item>
            <Form.Item name="phoneNumber">
              <Input
                name="phoneNumber"
                className="zef-input"
                suffix={<PhoneOutlined />}
                placeholder="Phone Number"
                autoComplete="new-number"
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                name="password"
                className="zef-input"
                placeholder="Password"
                autoComplete="new-password"
              />
            </Form.Item>
            <Form.Item name="confirmPassword">
              <Input.Password
                name="confirm-password"
                className="zef-input"
                placeholder="Confirm Your Password"
                autoComplete="new-password"
              />
            </Form.Item>
            <Form.Item name="submit" className="submit">
              <SubmitButton type="primary" htmlType="submit">
                SUBMIT
              </SubmitButton>
            </Form.Item>
            <div className="register">
              Don&apos;t have an account?
              <Link to="/">LOGIN</Link>
            </div>
          </Form>
        </Formik>
      </Container>
    </LoginsStyle>
  );
};

const initialValues = { email: "", password: "", confirmPassword: "", phoneNumber: "" };

export default LoginPage;
