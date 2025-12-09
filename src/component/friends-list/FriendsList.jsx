import Button from "../button/Button";
import FriendsListItem from "../friends-list-item/FriendsListItem";
import styled from "styled-components";
import { useState, useContext } from "react";
import { FriendsListContext } from "../../FriendsListContext";

const StyledFriendsListSection = styled.div`
  margin: 50px;
`;

const StyledFriendsList = styled.div`
  display: flex;
  gap: 20px;
`;

function FriendsList() {
  const { friendsInfo } = useContext(FriendsListContext);
  // defining state
  const [initialFriends, setInitialFriends] = useState(friendsInfo.slice(0, 4));
  const [viewMoreText, setViewMoreText] = useState("View more");

  const handleViewMore = () => {
    setInitialFriends(friendsInfo);
    setViewMoreText("View less");
  };

  const handleViewLess = () => {
    setInitialFriends(friendsInfo.slice(0, 4));
    setViewMoreText("View more");
  };

  // useEffect hook -- help us to make http request (fetching data from an api)
  // react-router-dom -- help us to create multi page/routes
  return (
    <StyledFriendsListSection>
      <h2>New Friends</h2>
      <StyledFriendsList>
        <FriendsListItem />
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
