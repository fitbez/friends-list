import FriendsList from "../../component/friends-list/FriendsList";

function FriendsListPage(props) {
  return (
    <>
      <FriendsList data={props.data} />;
    </>
  );
}

export default FriendsListPage;
