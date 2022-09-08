import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import DayListItem from "../components/DayListItem";

const Home: NextPage = () => {
  const [day, setDay] = useState("Monday");
  const [spots, setSpots] = useState(5);

  const onClick = () => {
    console.log("You clicked me!!");
  };

  return (
    <>
      <MainContainer>
        <DayListContainer>
          <DayListItem name={day} spots={spots} />
        </DayListContainer>
        <Button buttonType="#10ac84" text="Click Me!" onClick={onClick} />
      </MainContainer>
    </>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #c71616;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const DayListContainer = styled.div`
  height: 100vh;
  width: 35%;
  background-color: #222f3e;
`;
