import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Routes from "./Routes";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function Home(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("");

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setKey(window.location.pathname);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo div-center" style={{ color: "#fff" }}>
          LOGO
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={key}
          onClick={(e) => setKey(e.key)}
        >
          <Menu.Item key="/home">
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="/view">
            <Link to="/view">View</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
}

const mapToStateProps = (state) => ({});

export default connect(mapToStateProps, {})(Home);
