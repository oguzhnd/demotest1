import { FC, ForwardedRef, forwardRef, useState } from "react";
import { Select, SelectProps, TextInput, TextInputProps } from "@mantine/core";
import classes from "./FloatingLabelSelect.module.css";

const FloatingLabelSelect: FC<
  SelectProps
> = (props) => {
  const [focused, setFocused] = useState(false);
  const floating =
    (props.value || "").toString().trim().length !== 0 || focused || undefined;

  return (
    <Select
      classNames={classes}
      data-floating={floating}
      labelProps={{ "data-floating": floating }}
      mt={7}
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

export default FloatingLabelSelect;
