import { css, styled } from "@/styles/stitches.config"

const HeadingCommonCss = {
    fontWeight: 700
}

export const Heading1 = styled("h1", {
    ...HeadingCommonCss,
    fontSize: "28px",
    lineHeight: "40px"
})

export const Heading2 = styled("h2", {
    ...HeadingCommonCss,
    fontSize: "26px",
    lineHeight: "36px",
})

export const Heading3 = styled("h3", {
    ...HeadingCommonCss,
    fontSize: "24px",
    lineHeight: "34px"
})

export const Heading4 = styled("h4", {
    ...HeadingCommonCss,
    fontSize: "22px",
    lineHeight: "32px"
})

export const Heading5 = styled("h5", {
    ...HeadingCommonCss,
    fontSize: "20px",
    lineHeight: "30px"
})