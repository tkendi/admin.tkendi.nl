import { styled } from "@/styles/stitches.config";

export const SitListTable = styled("div", {
    width: "850px",
    marginTop: "80px",
    "&>div:nth-child(odd)": {
        borderBottom: "1px solid #000"
    }
})

export const SiteListTableRow = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 16px",
    paddingBottom: "24px",
    "&>div:nth-child(1)": {
        width: "636px",
    },
})