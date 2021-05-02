import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

const mapToStateProps = (state) => ({});

export default connect(mapToStateProps, {})(Home);
