import React, { useCallback, useState, useMemo } from "react";
import { Layout, Input, Menu, Radio, Pagination, Button } from "antd";
import { useIntl } from "react-intl";
import { Formik, Form } from "formik";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Card, Badge } from "antd";

import { HeaderUser, ContentStyle } from "@zef/pages/user/style";
import MenuLeft from "@zef/pages/user/menu";
import CarouselCenter from "@zef/pages/user/carousel/index";
import actions from "@zef/pages/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { localeSelector } from "@zef/pages/user/selector";
import { Link } from "react-router-dom";
import { AiOutlineExport } from "react-icons/ai";
import { databaseSelector } from "@zef/pages/user/menu/selector";
import { data } from "@zef/pages/user/data";

const { Sider, Footer } = Layout;
const { Meta } = Card;

const user = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { messages } = useIntl();
  const [search, setSearch] = useState("");
  const locale = useSelector(localeSelector);
  const database = useSelector(databaseSelector);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = useCallback(() => {
    history.push(`/user/${search}`);
  }, [search]);

  const onclickHome = useCallback(() => {
    history.push(`/user/`);
  }, []);

  const onclickNewProduct = useCallback(() => {
    history.push(`/user/detail`);
  }, []);

  const onchangeLanguage = useCallback(
    (e) => {
      dispatch(actions.locale({ locale: e.target.value }));
    },
    [dispatch]
  );

  const handleChangeCart = useCallback(() => {
    dispatch(actions.getCard({ data: data }));
  }, [dispatch]);

  const ProductComponents = useMemo(
    () =>
      database
        .filter((userData) =>
          userData.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((userData, index) => (
          <div key={index} className="item-product">
            <Card
              hoverable
              style={{ width: 285 }}
              cover={
                <img
                  alt="example"
                  src={userData.image}
                  onClick={() => history.push(`/user/detail/${userData.name}`)}
                />
              }
            >
              {" "}
              <Meta title={userData.name} description={userData.price} />
              <Button type="primary" onClick={handleChangeCart}>
                Card
              </Button>
            </Card>
          </div>
        )),
    [database, search]
  );

  return (
    <Layout>
      <Sider style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            height: 64,
            width: 200,
            textAlign: "center",
            fontSize: 40,
            backgroundColor: "#fff",
          }}
        >
          LOGO
        </div>
        <MenuLeft />
      </Sider>
      <Layout>
        <HeaderUser md={18} lg={18} xl={19} xxl={32}>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
              <Input
                onChange={handleChange}
                prefix={<SearchOutlined />}
                placeholder="input search text"
                style={{ width: 400 }}
                className="input"
              />
            </Form>
          </Formik>
          <Menu mode="horizontal">
            <Menu.Item key="1" onClick={onclickHome}>
              {messages["Home Pages"]}
            </Menu.Item>
            <Menu.Item key="2" onClick={onclickNewProduct}>
              {messages["New Product"]}
            </Menu.Item>
            <Menu.Item key="3">{messages["Accessories"]}</Menu.Item>
            <Menu.Item key="4">{messages["Notification"]}</Menu.Item>
            <Menu.Item key="5">{messages["Contact"]}</Menu.Item>
          </Menu>
          <div style={{ marginLeft: 50 }}>
            <Radio.Group onChange={onchangeLanguage} value={locale}>
              <Radio.Button value="en-US">English</Radio.Button>
              <Radio.Button value="ja-JP">日本語</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ marginLeft: 25 }}>
            <Badge count={5} offset={[10]}>
              <Link to="/user/cart">
                {messages["Card"]}
                &nbsp;
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </div>
          <span style={{ marginLeft: 25 }}>
            <Link to="/">
              {messages["LOGOUT"]}
              &nbsp; <AiOutlineExport />
            </Link>
          </span>
        </HeaderUser>
        <ContentStyle>
          <div>
            <CarouselCenter />
          </div>
          <div className="card-item" style={{ display: "flex" }}>
            {ProductComponents}
          </div>
          <Pagination
            defaultCurrent={1}
            total={50}
            style={{ textAlign: "center", marginTop: "20px" }}
          />
        </ContentStyle>
        <Footer>Footer</Footer>
      </Layout>
      <Sider>
        <div style={{ height: 64, width: 200 }}>LOGO</div>
      </Sider>
    </Layout>
  );
};

const initialValues = { name: "" };

export default user;
