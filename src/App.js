import { connect } from "react-redux";
import { loading } from "./redux/action/loading";
import "./App.less";
import Loader from "./LOADER/Loader";
import { Fragment } from "react";
import Routes from "./Routes";

function App(props) {
  return (
    <Fragment>
      <Loader />
      <Routes />
    </Fragment>
  );
}

const mapToStateProps = (state) => ({
  LOADING: state.Loading.Loading,
});

export default connect(mapToStateProps, { loading })(App);
