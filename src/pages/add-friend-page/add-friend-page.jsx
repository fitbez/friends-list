import FriendForm from "../../component/friend-form/FriendForm";
import { Container } from "../../component/styled-components";
import { useContext } from "react";
import { FriendsListContext } from "../../FriendsListContext";

function AddFriendPage() {
  const { handleSave, isAddSuccess } = useContext(FriendsListContext);
  return (
    <Container>
      <FriendForm onSave={handleSave} isAddSuccess={isAddSuccess} />
    </Container>
  );
}

export default AddFriendPage;
