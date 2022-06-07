function UserLogin() {
  return <h1>Welcome back</h1>;
}

function GuestLogin() {
  return <h1>Plesae sign up</h1>;
}

function TernarySignUp() {
  const isLogin = true;

  return <div> {isLogin ? <UserLogin /> : <GuestLogin />}</div>;
}

export default TernarySignUp;
