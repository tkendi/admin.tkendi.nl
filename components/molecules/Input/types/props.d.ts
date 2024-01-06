import { HTMLInputTypeAttribute } from "react";
import { Path, Path, UseFormRegister, RegisterOptions } from "react-hook-form";

interface Props {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  labelInfo: string;
}

type FormInputProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
} & Omit<Props, "name">;
