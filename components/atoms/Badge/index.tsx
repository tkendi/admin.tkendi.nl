import React from "react";

import { BodyText, CaptionText } from "../Text";

import { Wrap } from "./styles/index.style";

interface Props {
  type: "edit" | "remove";
  name: string;
}

const Badge = ({ name, type }: Props) => {
  const { Body1 } = BodyText;
  return (
    <Wrap type={type}>
      <Body1>{name}</Body1>
    </Wrap>
  );
};

export default Badge;

export const EditBdage = () => {
  return <Badge type="edit" name="수정" />;
};

export const RemoveBadge = () => {
  return <Badge type="remove" name="삭제" />;
};
