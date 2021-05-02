import React, { Suspense } from "react";
import { connect } from "react-redux";
import { loading } from "./redux/action/loading";
import Loader from "./LOADER/Loader";
import "./App.less";

const Pages = React.lazy(() => import("./Routes"));

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
