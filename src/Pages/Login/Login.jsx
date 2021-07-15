import React from "react";
import { Form, Input, Button, Divider } from "antd";
import { connect } from "react-redux";
import "./Login.less";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="div-center" style={{ height: "100vh" }}>
      <Form
        style={{ width: "500px" }}
        name="login"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h1 className="" style={{ textAlign: "center" }}>
          Login
        </h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ display: "block", margin: "auto" }}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
        <Divider style={{ borderTop: "gray" }}>Or</Divider>
        <Button style={{ display: "block", margin: "auto" }} type="primary">
          <Link to="/sign-up">Register</Link>
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
