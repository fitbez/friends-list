import styled from "styled-components";

const StyleProfileCard = styled.div`
  margin: 20px;
  width: 200px;
  height: 220px;
  background-color: #f4f4f4f4;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24);
`;

const StyledImage = styled.img`
  width: 200px;
  height: 100px;
`;

const StyledParagraph = styled.p`
  font-size: 14px;
`;

const StyledHeader = styled.h3`
  font-size: 14px;
`;
const StyledCardContent = styled.div`
  padding: 5px 10px;
`;

function FriendsListItem(props) {
  return (
    <>
      {props.data.map((friend) => {
        return (
          <StyleProfileCard key={friend.id}>
            <StyledImage src={friend.profilePicture} alt="" />
            <StyledCardContent>
              <StyledHeader>Name: {friend.name}</StyledHeader>
              <StyledParagraph>Occupation: {friend.occupation}</StyledParagraph>
              <StyledParagraph>Age: {friend.age}</StyledParagraph>
            </StyledCardContent>
          </StyleProfileCard>
        );
      })}
    </>
  );
}

export default FriendsListItem;
