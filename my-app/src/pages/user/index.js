import React, { useCallback, useState, useMemo } from "react";
import { Layout, Input, Radio, Pagination, Button } from "antd";
import { useIntl } from "react-intl";
import { Formik, Form } from "formik";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Card, Badge, Tabs } from "antd";

import { ContentStyle, LayoutWaper } from "@zef/pages/user/style";
import MenuLeft from "@zef/pages/user/menu";
import CarouselCenter from "@zef/pages/user/carousel/index";
import actions from "@zef/pages/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { localeSelector } from "@zef/pages/user/selector";
import { Link } from "react-router-dom";
import { AiOutlineExport } from "react-icons/ai";
import { databaseSelector } from "@zef/pages/user/menu/selector";
import { data } from "@zef/pages/user/data";
import FooterPages from "@zef/pages/user/footer";
import Notification from "@zef/pages/user/notification";
import Accessories from "@zef/pages/user/accessories";
import NewProducts from "@zef/pages/user/sp";
import Contact from "@zef/pages/user/contact";

const { Sider } = Layout;
const { Meta } = Card;
const { TabPane } = Tabs;

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

  const OperationsSlot = {
    left: (
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Input
            onChange={handleChange}
            prefix={<SearchOutlined />}
            placeholder="input search text"
            style={{ width: 300 }}
            className="input"
          />
        </Form>
      </Formik>
    ),
    right: (
      <div>
        <Radio.Group onChange={onchangeLanguage} value={locale}>
          <Radio.Button value="en-US">English</Radio.Button>
          <Radio.Button value="ja-JP">日本語</Radio.Button>
        </Radio.Group>

        <TabPane tab={messages["Contact"]} key="9">
          <Contact />
        </TabPane>

        <Badge count={5} offset={[10]}>
          <Link to="/user/cart" style={{ marginLeft: 50 }}>
            {messages["Card"]}
            &nbsp;
            <ShoppingCartOutlined />
          </Link>
        </Badge>
        <Link to="/" style={{ marginLeft: 50 }}>
          {messages["LOGOUT"]}
          &nbsp; <AiOutlineExport />
        </Link>
      </div>
    ),
  };

  return (
    <LayoutWaper style={{ backgroundColor: "#fff" }}>
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
        <Tabs defaultActiveKey="1" tabBarExtraContent={OperationsSlot}>
          <TabPane tab={messages["Home Pages"]} key="1">
            <ContentStyle>
              <div>
                <CarouselCenter />
              </div>
              <div>Home</div>
              <div className="card-item" style={{ display: "flex" }}>
                {ProductComponents}
              </div>
              <Pagination
                defaultCurrent={1}
                total={50}
                style={{ textAlign: "center", lineHeight: "50px" }}
              />
            </ContentStyle>
          </TabPane>
          <TabPane tab={messages["New Product"]} key="2">
            <NewProducts />
          </TabPane>
          <TabPane tab={messages["Accessories"]} key="3">
            <Accessories />
          </TabPane>
          <TabPane tab={messages["Notification"]} key="4">
            <Notification />
          </TabPane>
          <TabPane tab={messages["Contact"]} key="5">
            <Contact />
          </TabPane>
        </Tabs>
        <FooterPages />
      </Layout>
      <Sider>
        <div style={{ height: 64, width: 200 }}>LOGO</div>
      </Sider>
    </LayoutWaper>
  );
};

const initialValues = { name: "" };

export default user;
