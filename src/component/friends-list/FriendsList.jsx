import Button from "../button/Button";
import FriendsListItem from "../friends-list-item/FriendsListItem";
import styled from "styled-components";
import { useState } from "react";

const StyledFriendsListSection = styled.div`
  margin: 50px;
`;

const StyledFriendsList = styled.div`
  display: flex;
  gap: 20px;
`;

function FriendsList(props) {
  // defining state
  const [initialFriends, setInitialFriends] = useState(props.data.slice(0, 4));
  const [viewMoreText, setViewMoreText] = useState("View more");

  const handleViewMore = () => {
    setInitialFriends(props.data);
    setViewMoreText("View less");
  };

  const handleViewLess = () => {
    setInitialFriends(props.data.slice(0, 4));
    setViewMoreText("View more");
  };

  // useEffect hook -- help us to make http request (fetching data from an api)
  // react-router-dom -- help us to create multi page/routes
  return (
    <StyledFriendsListSection>
      <h2>New Friends</h2>
      <StyledFriendsList>
        <FriendsListItem data={initialFriends} />
      </StyledFriendsList>
      <Button
        name={viewMoreText}
        bgColor="#11CCF4"
        handleViewMore={
          viewMoreText === "View more" ? handleViewMore : handleViewLess
        }
      />
    </StyledFriendsListSection>
  );
}

export default FriendsList;
