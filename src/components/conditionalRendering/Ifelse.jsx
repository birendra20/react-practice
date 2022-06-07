function UserLogin() {
  return <h1>Welcome back</h1>;
}

function GuestLogin() {
  return <h1>Plesae sign up</h1>;
}

function SignUp() {
  const isLogin = true;

  if (isLogin) {
    return <UserLogin />;
  }
  return <GuestLogin />;
}

export default SignUp;
