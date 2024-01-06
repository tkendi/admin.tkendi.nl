import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

import {
  StyledClearButtonWrap,
  StyledInput,
  StyledInputLabel,
  StyledInputWrap,
} from "./styles/index.style";
import { FormInputProps } from "./types/props";

const Input = <TFormValues extends Record<string, unknown>>({
  placeholder,
  register,
  name,
  rules,
  type,
  labelInfo,
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <StyledInputWrap>
      <StyledInputLabel>{labelInfo}</StyledInputLabel>
      <StyledInput
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        {...(register && register(name, rules))}
      />
      <StyledClearButtonWrap>
        <IoCloseCircleOutline size="24px" />
      </StyledClearButtonWrap>
    </StyledInputWrap>
  );
};

export default Input;
