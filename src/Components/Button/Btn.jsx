import React from "react";
import { connect } from "react-redux";

export const Button = ({ style }) => {
  return <button style={{ ...style }}></button>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
