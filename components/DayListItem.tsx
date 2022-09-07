import React from "react";

const DayListItem = ({ name, spots }: { name: string; spots: number }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{spots} Spots Remaining</h3>
    </div>
  );
};

export default DayListItem;
