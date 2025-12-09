import { useState, useEffect } from "react";
import { Container, Box, Title, Input, Button } from "../styled-components";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  occupation: "",
  age: "",
  profilePicture: "",
};

function FriendForm({ selectedFriend, onSave, isAddSuccess }) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (selectedFriend) {
      setForm(selectedFriend);
    } else {
      setForm(initialState);
    }
  }, [selectedFriend]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log("form", form);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Box>
      <Title>{selectedFriend ? "Update Friend" : "Add Friend"}</Title>

      {isAddSuccess && (
        <p
          style={{
            padding: "5px 15px",
            backgroundColor: "lightgreen",
            border: "1px solid green",
          }}
        >
          You have successfully added a friend!!
        </p>
      )}

      {Object.keys(initialState).map((field) => (
        <Input
          key={field}
          name={field}
          placeholder={`Enter ${field}`}
          value={form[field]}
          onChange={handleChange}
        />
      ))}
      <Button type="submit" onClick={handleSubmit}>
        {" "}
        {selectedFriend ? "Update Friend" : "Add Friend"}
      </Button>
    </Box>
  );
}

export default FriendForm;
