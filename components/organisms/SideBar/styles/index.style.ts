import { css, styled } from "@/styles/stitches.config";

export const Wrap = styled("div", {
  width: "240px",
  height: "calc(100% - 60px)",
  padding: "24px 16px 0px",
  borderColor: "$BlueGray100",
  borderWidth: "1px",
  borderRightStyle: "solid",
  flexGrow: 1,
});

export const MenuIconBox = styled("div", {
  width: "20px",
  height: "20px",
  marginRight: "6px",
  backgroundColor: "$BlueGray200",
  borderRadius: "4px",
});

const MenuSectionCommonCss = {
  padding: "12px",
};

const SubMenuSectionCommonCss = {
  padding: "10px 0px 10px 12px",
};

export const TitleSection = styled("div", {
  padding: "0px 12px",
  marginBottom: "8px",
});

export const MenuWrap = styled("div", {
  ...MenuSectionCommonCss,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
});

export const MenuSection = styled("div", {});

export const SubMenuWrap = styled("div", {
  marginLeft: "12px",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
});

export const SubMenuSection = styled("div", {
  ...SubMenuSectionCommonCss,
  "& div": {
    marginTop: "2px",
  },
  ">div:first-of-type": {
    marginTop: "0px",
  },
});
