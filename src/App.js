import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { loading } from "./Redux/action/loading";
import Loader from "./LOADER/Loader";
import "./App.less";

const Pages = lazy(() => import("./Routes"));

function App(props) {
  return (
    <Suspense fallback={<div>Put a Global Loader</div>}>
      <Loader />
      <Pages />
    </Suspense>
  );
}

const mapToStateProps = (state) => ({
  LOADING: state.Loading.Loading,
});

export default connect(mapToStateProps, { loading })(App);
