import React from 'react'
import { ImageButtonWrap, ImagePreivewButton, ImageUploadButton, TitleSection, UploadButton, Wrap } from './styles/index.style'

import { BodyText, HeadingText } from '@/components/atoms/Text'
import SiteListTable from './SiteListTable'

const WebManageOrganism = () => {
    const { Heading1 } = HeadingText
    const { Body1, Body2 } = BodyText

    return (
        <Wrap>
            <TitleSection>
                <Heading1 css={{ color: "$BlueGray800" }}>
                    인덱스 관리
                </Heading1>
                <UploadButton>
                    <Body2 css={{ color: "$White", fontWeight: 700 }}>이미지 업로드하기</Body2>
                </UploadButton>
            </TitleSection>
            <ImageButtonWrap>
                <ImageUploadButton css={{ marginRight: "8px" }}>
                    <Body1 css={{ color: "$BlueGray500", fontWeight: 600 }}>이미지 등록하기</Body1>
                </ImageUploadButton>
                <ImagePreivewButton>
                    <Body1 css={{ color: "$BlueGray500", fontWeight: 600 }}>이미지 등록하기</Body1>
                </ImagePreivewButton>
            </ImageButtonWrap>
            <SiteListTable />
        </Wrap>
    )
}

export default WebManageOrganism