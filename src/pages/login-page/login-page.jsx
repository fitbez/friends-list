import Login from "../../component/login/login";
import { useContext } from "react";
import { FriendsListContext } from "../../FriendsListContext";

function LoginPage() {
  const { handleLogin } = useContext(FriendsListContext);
  return (
    <>
      <Login onLogin={handleLogin} />;
    </>
  );
}

export default LoginPage;
