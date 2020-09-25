import React, { useCallback, useEffect, useState } from "react";
import {
  Layout,
  Input,
  Radio,
  Pagination,
  Button,
  Skeleton,
  Rate,
  Modal,
} from "antd";
import { useIntl } from "react-intl";
import { Formik, Form } from "formik";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Card, Badge, Tabs, BackTop } from "antd";

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
  const [loading, setLoading] = useState(false);
  const locale = useSelector(localeSelector);
  const database = useSelector(databaseSelector);
  const [rate, setRate] = useState(3);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading({ loading });
    }, 2000);
  });

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

  const onClickRate = useCallback(() => {
    setRate(rate);
    Modal.confirm({
      title: "Confirm",
      content: `"You want to rate ${rate}-star products"`,
      okText: "Ok",
      okCancel: "Cancel",
    });
  }, [dispatch]);

  const togglePagination = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(10);
    } else {
      setMinValue(10);
      setMaxValue(value * 10);
    }
  };

  const ProductComponents = database
    .filter((userData) =>
      userData.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(minValue, maxValue)
    .map((userData, index) => (
      <Skeleton loading={!loading} avatar active key={index}>
        <div className="item-product" style={{ textAlign: "center" }}>
          <Card
            hoverable
            style={{ width: 300 }}
            cover={
              <img
                className="img-container"
                alt="example"
                src={userData.image}
                onClick={() => history.push(`/user/detail/${userData.name}`)}
              />
            }
          >
            {" "}
            <Meta title={userData.name} description={userData.price} />
            <div>
              <Rate tooltips={desc} onChange={onClickRate} />
              {rate ? (
                <span className="ant-rate-text">{desc[rate - 1]}</span>
              ) : (
                ""
              )}
            </div>
            <Button
              className="card-btn"
              type="primary"
              onClick={handleChangeCart}
            >
              Card
            </Button>
          </Card>
        </div>
      </Skeleton>
    ));
  const OperationsSlot = {
    left: (
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Input
            onChange={handleChange}
            prefix={<SearchOutlined />}
            placeholder="input search text"
            className="input"
            style={{ width: 350 }}
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
                defaultPageSize={8}
                total={20}
                style={{ textAlign: "center", lineHeight: "100px" }}
                onChange={togglePagination}
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
      <BackTop style={{ marginBottom: 20 }}>
        <div
          style={{
            height: 40,
            width: 40,
            lineHeight: "40px",
            borderRadius: 4,
            backgroundColor: "#1088e9",
            color: "#fff",
            textAlign: "center",
            fontSize: 14,
          }}
        >
          UP
        </div>
      </BackTop>
    </LayoutWaper>
  );
};

const initialValues = { name: "" };

export default user;
