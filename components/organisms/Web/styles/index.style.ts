import { styled } from "@/styles/stitches.config";

export const Wrap = styled("div", {
  width: "100%",
  maxWidth: "548px",
  height: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const TitleSection = styled("div", {
  width: "100%",
  marginTop: "90px",
  marginBottom: "32px",
});

export const ButtonSection = styled("div", {
  width: "100%",
});

export const Button = styled("div", {
  width: "calc(100% - 64px)",
  height: "110px",
  padding: "0px 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "12px",
  variants: {
    isActive: {
      true: {
        backgroundColor: "#717BBC",
      },
      false: {
        backgroundColor: "#ffffff",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "$BlueGray200",
      },
    },
  },
});
