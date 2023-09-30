import React from 'react'

import { SitListTable, SiteListTableRow } from './styles/index.style'

import { Text } from '@/components/atoms/Text'

const SiteListTable = () => {
    return (
        <SitListTable>
            <SiteListTableRow>
                <div>
                    <Text css={{ color: "#6F798E", fontSize: "14px", fontWeight: 700 }}>사이트</Text>
                </div>
                <div style={{ marginRight: "60px" }}>
                    <Text css={{ color: "#6F798E", fontSize: "14px", fontWeight: 700 }}>담당부서</Text>
                </div>
                <div>
                    <Text css={{ color: "#6F798E", fontSize: "14px", fontWeight: 700 }}>관리</Text>
                </div>
            </SiteListTableRow>

            <SiteListTableRow>
                <div>
                    <Text css={{ color: "$Primary500", fonrSize: "18px", fontWeight: 700 }}>
                        인덱스(랜딩페이지)
                    </Text>
                </div>
                <div style={{ marginRight: "57px" }}>
                    <Text css={{ color: "$Primary500", fontSize: "16px", fontWeight: 400 }}>
                        브랜딩팀
                    </Text>
                </div>
                <div>관리</div>
            </SiteListTableRow>
        </SitListTable>
    )
}

export default SiteListTable
