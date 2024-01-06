import { breakPoints } from "@/styles/breakPoints";
import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  maxWidth: breakPoints.lg,
  margin: "0 auto",

  "@me": {
    maxWidth: breakPoints.me,
  },

  "@sm": {
    maxWidth: breakPoints.sm,
  },
});
