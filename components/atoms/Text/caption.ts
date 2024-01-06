import { css, styled } from "@/styles/stitches.config";

const CaptionCommonCss = {
  fontWeight: 600,
};

export const Caption1 = styled("span", {
  ...CaptionCommonCss,
  fontSize: "10px",
  lineHeight: "14px",
});

export const Caption2 = styled("span", {
  ...CaptionCommonCss,
  fontSize: "11px",
  lineHeight: "16px",
});
