import React from "react";
import styled from "styled-components";

const DayListItem = ({
  name,
  spots,
  onClick,
}: {
  name: string;
  spots: number;
  onClick: any;
}) => {
  return (
    <ListItemContainer>
      <TitleContainer onClick={onClick}>{name}</TitleContainer>
      <TextContainer>{spots} Spots Remaining</TextContainer>
    </ListItemContainer>
  );
};

export default DayListItem;

const TitleContainer = styled.h2`
  color: #fff;
`;

const TextContainer = styled.h3`
  color: #a79f9f;
`;

const ListItemContainer = styled.li`
  list-style: none;
  width: 80%;
  padding: 10px;
  &:hover {
    background-color: #8f2727;
  }
`;
