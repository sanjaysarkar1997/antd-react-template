import React from "react";
import { connect } from "react-redux";

export const Login = (props) => {
  return (
    <div>
      <h1 className="selector">Login</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
