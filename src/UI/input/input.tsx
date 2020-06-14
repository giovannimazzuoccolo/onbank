import React from "react";
import styled from "styled-components";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  //size?: "S" | "M" | "L"; size ? size : "",
  isRequired?: boolean;
}

const Input: React.FC<IProps & React.HTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { isRequired } = props;

  return <SInput required={isRequired} {...props} />;
};

export default Input;

const SInput = styled.input`
  border-radius: 0;
  font-size: 1.1rem;
  line-height: 1.1rem;
  padding: 4px;
  margin-bottom: 8px;
  border: 1px solid #eee;
  background-color: #f1f1f1;
  height: 1.5rem;
`;
