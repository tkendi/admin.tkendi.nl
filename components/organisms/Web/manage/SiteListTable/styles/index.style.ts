import { styled } from "@/styles/stitches.config";

export const SitListTable = styled("div", {
    width: "1120px",
    marginTop: "16px",
})

export const SiteListTableRow = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    "&>div": {
        padding: "10px 0px 10px 20px"
    }
})

export const SiteListTableBody = styled("div", {
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid $BlueGray100",
    "&>div": {
        padding: "10px 0px 10px 20px"
    },

})