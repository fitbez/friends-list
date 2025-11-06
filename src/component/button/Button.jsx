import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 1rem;
`;

function Button(props) {
  console.log("props", props);
  return (
    <StyledButton
      style={{ backgroundColor: props.bgColor }}
      onClick={props.handleViewMore}
    >
      {props.name}
    </StyledButton>
  );
}

export default Button;
