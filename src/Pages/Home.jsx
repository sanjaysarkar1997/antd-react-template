import React from "react";
import { connect } from "react-redux";

function Home(props) {
  return (
    <div>
      <h1>WelCome</h1>
    </div>
  );
}

const mapToStateProps = (state) => ({
  //   LOADING: state.Loading.Loading,
});

export default connect(mapToStateProps, {})(Home);
