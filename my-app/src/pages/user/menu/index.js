import React, { useState, useCallback } from "react";
import { Menu, Layout } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { CollLeft } from "@zef/pages/user/menu/style";
import { Radio } from "antd";

const MenuLeft = () => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const [collapsedLeft, setCollapsedLeft] = useState(false);
  const onCollapseLeft = useCallback(() => setCollapsedLeft(!collapsedLeft), [
    collapsedLeft,
  ]);

  return (
    <CollLeft className="site-layout">
      <Sider
        collapsible
        collapsed={collapsedLeft}
        onCollapse={onCollapseLeft}
        theme="light"
        className="er-slider-left"
      >
        <div className="logo" />
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>Find the Product name</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g2" title="Iphone">
              <Radio.Group>
                <Radio value={1}>0 - 10.000.000</Radio>
                <Radio value={2}>10.000.000 - 20.000.000</Radio>
                <Radio value={3}>20.000.000 - 30.000.000</Radio>
                <Radio value={4}>
                  Trên 30.000.000
                  {/*{value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}*/}
                </Radio>
              </Radio.Group>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Sam Sung">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g3" title="Oppo">
              <Menu.Item key="5">Option 3</Menu.Item>
              <Menu.Item key="6">Option 4</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g4" title="Sonny">
              <Menu.Item key="7">Option 3</Menu.Item>
              <Menu.Item key="8">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Search By Product Price"
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <SettingOutlined />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </CollLeft>
  );
};

export default MenuLeft;
