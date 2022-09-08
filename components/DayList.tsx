import React from "react";
import DayListItem from "./DayListItem";
import styled from "styled-components";

const DayList = ({ days, onClick }: { days: any; onClick: any }) => {
  const arrayOfDayListItems = days.map((day: any) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        onClick={onClick}
      />
    );
  });

  return <StyledUl>{days && arrayOfDayListItems}</StyledUl>;
};

export default DayList;

const StyledUl = styled.ul`
  width: 100%;
`;
