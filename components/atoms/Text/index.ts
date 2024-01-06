import { Body1, Body2, Body3 } from "./body";
import { Caption1, Caption2 } from "./caption";
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from "./heading";

import { styled } from "@/styles/stitches.config";

export const Text = styled("p", {
  fontWeight: 500,
  color: "$Primary100",
});

const HeadingText = {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
};

const BodyText = {
  Body1,
  Body2,
  Body3,
};

const CaptionText = {
  Caption1,
  Caption2,
};

export { HeadingText, BodyText, CaptionText };
