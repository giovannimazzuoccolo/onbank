import React from "react";

type errors = { condition: Function; message: string }[];

interface useInputIProps {
  value: string;
  errors: errors;
}

export default (props: useInputIProps) => {
  const [value, setValue] = React.useState(props.value);
  const conditionRef = React.useRef<errors | null>(null);
  conditionRef.current = props.errors;
  const [errorList, setConditionAgainstValue] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (conditionRef.current !== null && conditionRef?.current.length > 0) {
      const errorArray = conditionRef.current.map(
        (err) => err.condition(value) && err.message
      );

      const filtered = errorArray.filter((err) => err);
      setConditionAgainstValue(filtered);
    }
  }, [value]);

  return {
    value,
    setValue,
    errorList,
  };
};
