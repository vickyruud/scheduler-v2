import React from "react";
import styled from "styled-components";

const DayListItem = ({ name, spots }: { name: string; spots: number }) => {
  return (
    <div>
      <Title>{name}</Title>
      <Title>{spots} Spots Remaining</Title>
    </div>
  );
};

export default DayListItem;

const Title = styled.h2`
  color: "#b00b0b";
  
`;
