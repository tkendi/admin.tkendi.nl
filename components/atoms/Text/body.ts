import { css, styled } from "@/styles/stitches.config"

const BodyCommonCss = {
    fontWeight: 500
}

export const Body1 = styled("p", {
    ...BodyCommonCss,
    fontSize: "13px",
    lineHeight: "20px"
})

export const Body2 = styled("p", {
    ...BodyCommonCss,
    fontSize: "14x",
    lineHeight: "22px",
})

export const Body3 = styled("p", {
    ...BodyCommonCss,
    fontSize: "15px",
    lineHeight: "24px"
})
