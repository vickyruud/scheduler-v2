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
    <div>
      <Title>Welcome to Scheduler!</Title>
      <Button buttonType="#10ac84" text="Click Me!" onClick={onClick} />
      <DayListItem name={day} spots={spots} />
    </div>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #c71616;
`;
