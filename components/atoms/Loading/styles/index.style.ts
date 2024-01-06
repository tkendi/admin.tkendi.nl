import { styled, keyframes } from "@/styles/stitches.config";

const LoadingKeyframes = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Wrap = styled("div", {
  width: "max-content",
  height: "fit-content",
  "& > svg": {
    animation: `${LoadingKeyframes} 1s linear infinite`,
  },
});
