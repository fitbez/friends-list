import Button from "../button/Button";
import styled from "styled-components";
import FriendsImage from "../../assets/friends.jpg";

const StyledHero = styled.div`
  padding: 0 4rem;
`;

const StyledHeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

// const = constant and we're not going to modify it later
// let = something that needs to be modified at some point

function Hero() {
  return (
    <StyledHero>
      <p>Home | Product</p>
      <StyledHeroSection>
        <div>
          <h1>Friends List</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
            dolore! In, distinctio saepe magnam corporis assumenda modi totam
            ipsam ullam corrupti suscipit odio aut iure, quia sed ipsum
            obcaecati eaque tempore explicabo iusto fugiat. Voluptatibus
            repudiandae reiciendis a explicabo commodi.
          </p>
          <Button name="Add Friend" bgColor="blue" />
          <Button name="Learn more" bgColor="green" />
        </div>
        <img src={FriendsImage} alt="" width="200" height="200" />
      </StyledHeroSection>
    </StyledHero>
  );
}

export default Hero;
