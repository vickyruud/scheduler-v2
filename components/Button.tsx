import React from "react";
import styled from "styled-components";

const Button = ({
  text,
  buttonType,
  onClick,
}: {
  text: string;
  buttonType: string;
  onClick: any;
}) => {
  return (
    <StyledButton onClick={onClick} buttonType={buttonType}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ buttonType: string }>`
  border-radius: 1rem;
  border: 0;
  font-size: 1.5rem;
  height: 2rem;
  line-height: 1.2rem;
  margin-right: 1rem;
  width: 8rem;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => (props.buttonType ? props.buttonType : "#fff")};
  color: ${(props) => (props.buttonType ? props.buttonType : "#fff")};
  background-color: transparent;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${(props) =>
      props.buttonType ? props.buttonType : "#fff"};
    border: 2px solid transparent;
  }
`;
