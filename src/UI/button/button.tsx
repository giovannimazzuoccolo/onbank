import React from "react";
import clsx from "clsx";

interface IProps {
  text: string;
  isLink?: boolean;
  importance?: "PRIMARY" | "SECONDARY";
  props: any;
}

const Button: React.FC<IProps> = (props) => {
  const { text, isLink, importance } = props;

  return (
    <button
      className={clsx([isLink ? "link" : "", importance ? importance : ""])}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
