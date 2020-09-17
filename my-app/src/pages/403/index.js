import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
const field403 = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Link to="/user/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};
export default field403;
