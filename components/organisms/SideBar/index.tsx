import React from "react";

import {
  MenuIconBox,
  MenuSection,
  MenuWrap,
  SubMenuSection,
  SubMenuWrap,
  TitleSection,
  Wrap,
} from "./styles/index.style";

import { BodyText, CaptionText } from "@/components/atoms/Text";

const SideBarData = [
  {
    id: 1,
    title: "웹 사이트",
    isReady: true,
    link: "/web",
    subMenuList: [
      { title: "인덱스 관리", isReady: true },
      { title: "배너", isReady: false },
    ],
  },
  { id: 2, title: "앱", isReady: false, subMenuList: [] },
] as const;

const SideBar = () => {
  const { Body1, Body3 } = BodyText;
  const { Caption1 } = CaptionText;
  return (
    <Wrap>
      <TitleSection>
        <Body1 css={{ fontWeight: 400, color: "$BlueGray500" }}>운영</Body1>
      </TitleSection>
      {SideBarData.map((menuInfo, _) => {
        return (
          <MenuSection key={menuInfo.id}>
            <MenuWrap>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MenuIconBox />
                <Body3 css={{ fontWeight: 600, color: "$BlueGray700" }}>
                  {menuInfo.title}
                </Body3>
              </div>
              {!menuInfo.isReady && <Caption1>준비중</Caption1>}
            </MenuWrap>
            {menuInfo.subMenuList.map((subMenuInfo, index) => {
              return (
                <SubMenuSection key={`${subMenuInfo.title} + ${index}`}>
                  <SubMenuWrap>
                    <Body1 css={{ fontWeight: 600, color: "$BlueGray700" }}>
                      {subMenuInfo.title}
                    </Body1>
                    {!subMenuInfo.isReady && <Caption1>준비중</Caption1>}
                  </SubMenuWrap>
                </SubMenuSection>
              );
            })}
          </MenuSection>
        );
      })}
    </Wrap>
  );
};

export default SideBar;
