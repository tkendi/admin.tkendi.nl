import { styled } from "@/styles/stitches.config";

export const Wrap = styled("div", {
  width: "100%",
  height: "calc(100% - 60px)",
  padding: "0px 40px",
});

export const TitleSection = styled("div", {
  margin: "24px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const UploadButton = styled("button", {
  height: "40px",
  padding: "9px 16px",
  borderRadius: "8px",
  outline: "none",
  border: "none",
  background: "linear-gradient(101deg, #B85EFF -11.34%, #5C55F7 100%)",
});

const ImageButtonCommonCss = {
  padding: "5px 12px 5px 10px",
  height: "30px",
  border: "1px solid $BlueGray200",
  borderRadius: "6px",
  backgroundColor: "$White",
};
export const ImageButtonWrap = styled("div", {});
export const ImageUploadButton = styled("button", {
  ...ImageButtonCommonCss,
  outline: "none",
});
export const ImagePreivewButton = styled("button", {
  ...ImageButtonCommonCss,
  outline: "none",
});
