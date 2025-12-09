import RegisterForm from "../../component/register/register-form";
import { useContext } from "react";
import { FriendsListContext } from "../../FriendsListContext";

function RegisterPage() {
  const { handleRegister } = useContext(FriendsListContext);
  return <RegisterForm onRegister={handleRegister} />;
}

export default RegisterPage;
