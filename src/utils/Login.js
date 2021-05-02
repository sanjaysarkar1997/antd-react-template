const Login = () => {
  console.log(localStorage.getItem("id"));
  if (localStorage.getItem("id")) {
    return true;
  } else {
    return false;
  }
};

export default Login;
