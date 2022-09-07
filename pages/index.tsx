import type { NextPage } from "next";
import styled from "styled-components";
import Button from "../components/Button";

const Home: NextPage = () => {
  const onClick = () => {
    console.log("You clicked me!!");
  };

  return (
    <div>
      <Title>Welcome to Scheduler!</Title>
      <Button buttonType="#10ac84" text="Click Me!" onClick={onClick} />
    </div>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #c71616;
`;
