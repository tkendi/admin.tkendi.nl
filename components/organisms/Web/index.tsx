import React from 'react'
import { BsChevronRight } from "react-icons/bs"

import { Button, ButtonSection, TitleSection, Wrap } from './styles/index.style'

import { HeadingText, BodyText } from '@/components/atoms/Text'

const WebOrganism = () => {
    const { Heading1, Heading5 } = HeadingText
    const { Body1 } = BodyText
    return (
        <Wrap>
            <TitleSection>
                <Heading1 css={{ color: "$BlueGray700" }}>
                    웹 사이트
                </Heading1>
                <Body1 css={{ color: "$BlueGray600", fontWeight: 400 }}>
                    설탭 어드민에서 쉽고 간편하게 이미지를 관리하세요.
                </Body1>
            </TitleSection>

            <ButtonSection>
                <Button isActive={true}>
                    <Heading5 css={{ color: "$White" }}>인덱스 관리(이미지 등록)</Heading5>
                    <BsChevronRight strokeWidth='2px' color='#ffffff' />
                </Button>
                <Button isActive={false} css={{ marginTop: "24px" }}>
                    <div>
                        <Heading5 css={{ color: "$BlueGray400" }}>배너 관리</Heading5>
                        <Body1 css={{ color: "$BlueGray400", fontWeight: 400 }}>해당 서비스는 준비중 입니다. 리프 복귀 후 진행 예정입니다.</Body1>
                    </div>
                    <BsChevronRight strokeWidth='2px' color="#A2ACBD" />
                </Button>
            </ButtonSection>
        </Wrap >
    )
}

export default WebOrganism