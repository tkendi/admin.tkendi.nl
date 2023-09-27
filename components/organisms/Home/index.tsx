import React from 'react'
import { SectionTitle } from './styles/index.style'

import { Text } from "@/components/atoms/Text"
import SiteListTable from './SiteListTable'

const HomeOrganism = () => {
    return (
        <SectionTitle>
            <Text css={{ color: "$Primary500", fontSize: "42px", fontWeight: 800 }}>어드민에서 한 번에 해결하세요!</Text>
            <Text css={{ color: "#9494FF", fontSize: "16px", marginTop: "16px" }}>고객에게 설탭을 소개할 수 있는 이미지를 등록해 보세요.</Text>
            <SiteListTable />
        </SectionTitle>
    )
}

export default HomeOrganism