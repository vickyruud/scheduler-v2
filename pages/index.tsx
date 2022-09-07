import type { NextPage } from "next";
import styled from "styled-components";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Title>Welcome to Scheduler!</Title>
      <Button buttonType="#10ac84" text="Click Me!" />
    </div>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #c71616;
`;
