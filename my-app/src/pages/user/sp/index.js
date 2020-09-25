import React from "react";
import { Breadcrumb, Button, Space, Upload, Popconfirm } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { LayoutComponnent } from "@zef/pages/user/sp/style";

const NewProduct = () => {
  return (
    <LayoutComponnent>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <Space>
          Space
          <Button type="primary">Button</Button>
          <Upload>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
          <Popconfirm
            title="Are you sure delete this task?"
            okText="Yes"
            cancelText="No"
          >
            <Button>Confirm</Button>
          </Popconfirm>
        </Space>
      </div>
    </LayoutComponnent>
  );
};

export default NewProduct;
