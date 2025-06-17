import { FC, useState } from 'react';
import { TextInput, TextInputProps } from '@mantine/core';
import classes from './FloatingLabelTextInput.module.css';

const FloatingLabelTextInput: FC<TextInputProps> = (props) => {
  const [focused, setFocused] = useState(false);
  const floating = (props.value || "").toString().trim().length !== 0 || focused || undefined;

  return (
    <TextInput
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

export default FloatingLabelTextInput;