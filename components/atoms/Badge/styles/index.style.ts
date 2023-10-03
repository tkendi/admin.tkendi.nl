import { styled } from "@/styles/stitches.config"

export const Wrap = styled('div', {
    padding: "6px 12px",
    borderRadius: "100px",
    variants: {
        type: {
            "edit": {
                backgroundColor: "#E9F5FF",
                "&>p": {
                    color: "#0A8FEF"
                }
            },
            "remove": {
                backgroundColor: "#FEF3F2",
                "&>p": {
                    color: "#F04438"
                }
            }
        }
    }
})