import React, { useState, useCallback } from "react";
import { Menu, Layout, Switch } from "antd";
import {
  AppstoreOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { CollLeft } from "@zef/pages/user/menu/style";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import actions from "@zef/pages/user/menu/actions";
import { data } from "@zef/pages/user/data";

const MenuLeft = () => {
  const dispatch = useDispatch();
  const [searchPrice, setSearchPrice] = useState("");
  const [changeName, setChangeName] = useState("");
  const [theme, setTheme] = useState("light");
  const { SubMenu } = Menu;
  const { Sider } = Layout;
  const [collapsedLeft, setCollapsedLeft] = useState(false);
  const onCollapseLeft = useCallback(() => setCollapsedLeft(!collapsedLeft), [
    collapsedLeft,
  ]);

  const handleChange = (e) => {
    setSearchPrice(e.target.value);
    console.log(searchPrice);
  };

  const handleChangeName = (e) => {
    setChangeName(e.target.value);
    console.log("aae", e.target.value);
  };

  const changeTheme = (value) => {
    setTheme({
      theme: value ? "dark" : "light",
    });
  };

  const handleChangeSubmit = useCallback(
    (e) => {
      dispatch(actions.searchPrice({ data: data, searchKey: e.target.value }));
    },
    [dispatch]
  );

  const onClickName = useCallback(
    (e) => {
      dispatch(
        actions.searchName({ data: data, searchSetName: e.target.value })
      );
    },
    [dispatch]
  );

  return (
    <CollLeft className="site-layout" style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsedLeft}
        onCollapse={onCollapseLeft}
        theme="light"
        className="er-slider-left"
      >
        <div className="logo">LOGO</div>
        <div style={{ textAlign: "center", padding: 10 }}>
          <Switch
            onChange={changeTheme}
            checkedChildren="dark"
            unCheckedChildren="light"
          />
        </div>
        <Menu
          theme={theme}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <SearchOutlined />
                <span>Find the Product name</span>
              </span>
            }
          >
            <Menu.ItemGroup
              key="1"
              title="Filter by price"
              onChange={handleChange}
            >
              <Radio.Group onChange={handleChangeSubmit}>
                <Radio value="1"> From High to Low </Radio>
                <Radio value="2">From Low to High </Radio>
              </Radio.Group>
            </Menu.ItemGroup>
            <Menu.ItemGroup
              key="2"
              value={changeName}
              title="Filter by brand"
              onChange={handleChangeName}
            >
              <Radio.Group>
                <Radio key="3" value="Iphone" onClick={onClickName}>
                  Iphone
                </Radio>
                <Radio key="4" value="SumSung" onClick={onClickName}>
                  Sam Sung
                </Radio>
                <Radio key="5" value="Oppo" onClick={onClickName}>
                  Oppo
                </Radio>
                <Radio key="6" value="Xiaomi" onClick={onClickName}>
                  Xiaomi
                </Radio>
              </Radio.Group>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g3" title="Oppo">
              <Menu.Item key="10">Option 3</Menu.Item>
              <Menu.Item key="11">Option 4</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g4" title="Sonny">
              <Menu.Item key="12">Option 3</Menu.Item>
              <Menu.Item key="13">Option 4</Menu.Item>
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
