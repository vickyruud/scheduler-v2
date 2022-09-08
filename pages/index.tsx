import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import DayList from "../components/DayList";
import DayListItem from "../components/DayListItem";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

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
          <DayList days={days} onClick={onClick} />
        </DayListContainer>
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
  width: 30%;
  background-color: #222f3e;
`;
