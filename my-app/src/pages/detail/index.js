import React, { useCallback, useState } from "react";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import validationSchema from "@zef/pages/detail/schema";
import { Button } from "antd";
// import { dataLogin } from "@zef/pages/detail/data";
import { useHistory } from "react-router";

export const dataLogin = [
  {
    id: "1",
    email: "test@email.com",
    password: "123",
  },
];

const detail = () => {
  const [setValue] = useState("");
  const history = useHistory();

  const handleSubmit = useCallback((value) => {
    if (dataLogin === value) {
      history.push("/user/card");
    } else {
      return null;
    }
  }, []);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <div style={{ top: 30, border: "1px solid #d9d9d9", padding: 50 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form name="form">
          <Form.Item name="name">
            <Input
              name="name"
              placeholder="Email"
              autoComplete="off"
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              name="password"
              placeholder="password"
              autoComplete="off"
              onChange={handleChange}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

const initialValues = { name: "", password: "" };

export default detail;
