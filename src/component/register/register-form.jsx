import { useState } from "react";
import { Box, Title, Input, Button } from "../styled-components";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function RegisterForm({ onRegister }) {
  const [form, setForm] = useState(initialState);

  //   useEffect(() => {
  //     if (selectedFriend) {
  //       setForm(selectedFriend);
  //     } else {
  //       setForm(initialState);
  //     }
  //   }, [selectedFriend]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log("form", form);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(form);
  };

  return (
    <Box>
      <Title>Register</Title>

      {Object.keys(initialState).map((field) => (
        <Input
          type={field}
          key={field}
          name={field}
          placeholder={`Enter ${field}`}
          value={form[field]}
          onChange={handleChange}
        />
      ))}
      <Button type="submit" onClick={handleSubmit}>
        Register
      </Button>
    </Box>
  );
}

export default RegisterForm;
