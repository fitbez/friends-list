function Login() {
  return (
    <div>
      <label>Email: </label>
      <input type="text" name="email" id="email" />
      <label>Password: </label>
      <input type="text" name="password" id="password" />
      <input type="button" value="Login" />
    </div>
  );
}

export default Login;
