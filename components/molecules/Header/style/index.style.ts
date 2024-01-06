import { Text } from "@/components/atoms/Text";
import { styled } from "@/styles/stitches.config";

export const Wrap = styled("div", {
  width: "100%",
  height: "30px",
  padding: "15px 28px",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  borderBottom: "1px solid $BlueGray100",
  backgroundColor: "#fefefe",
});

export const LogoBox = styled("div", {
  width: "max-content",
  height: "max-content",
  display: "flex",
});

export const LogoText = styled(Text, {
  fontFamily: "SUIT Variable",
  fontSize: "20px",
  fontWeight: 700,
  textAlign: "center",
  color: "$Primary500",
});

export const LogoSymbolText = styled(Text, {
  fontFamily: "Source Serif Pro",
  fontSize: "10px",
  fontStyle: "italic",
  fontWeight: 600,
  fontFeatureSettings: "'liga' off, 'cling' off",
  background: "linear-gradient(101deg, #B85EFF -11.34%, #5C55F7 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});
