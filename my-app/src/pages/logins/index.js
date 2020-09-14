import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import { LoginsStyle, Container, Title } from "./style";
import validationSchema from "./schema";
import { useDispatch } from "react-redux";
import actions from "@zef/pages/logins/actions";

const LoginPage = () => {
  const dispatch = useDispatch;
  const handleSubmit = useCallback(
    (data, form) => {
      new Promise((resolve, reject) =>
        dispatch(
          actions.login({
            user: data.email,
            password: data.password,
            resolve,
            reject,
          })
        )
      )
        .then()
        .catch((e) => {
          form.setSubmitting(false);
          console.error({
            title: e.name,
            content: e.message,
          });
        });
    },
    [dispatch]
  );

  return (
    <LoginsStyle>
      <Container>
        <Title level={2}>LOGIN SHOPPING</Title>
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
            <Form.Item name="password">
              <Input.Password
                name="password"
                className="zef-input"
                placeholder="Password"
                autoComplete="new-password"
              />
            </Form.Item>
            <Form.Item name="submit" className="submit">
              <SubmitButton type="primary" htmlType="submit">
                SUBMIT
              </SubmitButton>
            </Form.Item>
            <div className="forgot-password">
              <Link to="/user">Forgot password?</Link>
            </div>
            <div className="register">
              Don&apos;t have an account?
              <Link to="/register">REGISTER</Link>
            </div>
          </Form>
        </Formik>
      </Container>
    </LoginsStyle>
  );
};

const initialValues = { email: "", password: "" };

export default LoginPage;
