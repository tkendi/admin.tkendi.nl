import { styled } from "@/styles/stitches.config";

export const StyledInputWrap = styled("div", {
  display: "inline-flex",
  alignItems: "center",
});

export const StyledInput = styled("input", {
  width: "100%",
  padding: "15px 10px",
  color: "$Info100",
  border: "none",
  outline: "none",
  background: "transparent",
  borderBottomColor: "$Primary200",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",

  "&:focus": {
    transition: "all 2ms linear",
    borderBottomColor: "$Success100",
  },

  variants: {
    isError: {
      true: {
        borderBottomColor: "$Danger500",
      },
    },
  },
});

export const StyledInputLabel = styled("label", {
  width: "0px",
  height: "0px",
  display: "none",
});

export const StyledClearButtonWrap = styled("div", {
  width: "max-content",
  display: "none",
});
