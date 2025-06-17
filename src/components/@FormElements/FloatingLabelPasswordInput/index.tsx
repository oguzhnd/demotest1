import { FC, useState } from 'react';
import { PasswordInput, PasswordInputProps } from '@mantine/core';
import classes from './FloatingLabelPasswordInput.module.css';

const FloatingLabelPasswordInput: FC<PasswordInputProps> = (props) => {
  const [focused, setFocused] = useState(false);
  const floating = (props.value || "").toString().trim().length !== 0 || focused || undefined;

  return (
    <PasswordInput
      classNames={classes}
      data-floating={floating}
      labelProps={{ 'data-floating': floating }}
      mt={7}
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

export default FloatingLabelPasswordInput;