const Login = () => {
  if (localStorage.getItem("id")) {
    return true;
  } else {
    return false;
  }
};

export default Login;
