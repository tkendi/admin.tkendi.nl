import { createStitches } from "@stitches/react";

import { generateMdeia } from "./breakPoints/createMedia";
import { themes } from "./theme";

export const {
  styled,
  css,
  theme,
  config,
  reset,
  globalCss,
  getCssText,
  keyframes,
} = createStitches({
  media: {
    ...generateMdeia(),
  },
  theme: {
    colors: {
      ...themes,
    },
  },
});
