import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Title>Welcome to Scheduler!</Title>
    </div>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #c71616;
`;
