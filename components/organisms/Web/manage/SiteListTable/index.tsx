import React from "react";

import {
  SitListTable,
  SiteListTableBody,
  SiteListTableRow,
} from "./styles/index.style";

import { EditBdage, RemoveBadge } from "@/components/atoms/Badge";
import { BodyText } from "@/components/atoms/Text";

const SiteListTable = () => {
  const { Body2 } = BodyText;
  return (
    <SitListTable>
      <SiteListTableRow css={{ backgroundColor: "$BlueGray50" }}>
        <div style={{ width: "70px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>체크</Body2>
        </div>
        <div style={{ width: "70px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>순서</Body2>
        </div>
        <div style={{ width: "110px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>이미지</Body2>
        </div>
        <div style={{ width: "290px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>
            검색 키워드
          </Body2>
        </div>
        <div style={{ width: "130px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>
            등록일자
          </Body2>
        </div>
        <div style={{ width: "100px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>상태</Body2>
        </div>
        <div style={{ width: "110px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>
            미리보기
          </Body2>
        </div>
        <div style={{ width: "150px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>관리</Body2>
        </div>
        <div style={{ width: "90px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>더보기</Body2>
        </div>
      </SiteListTableRow>

      <SiteListTableBody>
        <div style={{ width: "70px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>체크</Body2>
        </div>
        <div style={{ width: "70px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>03</Body2>
        </div>
        <div style={{ width: "110px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>이미지</Body2>
        </div>
        <div style={{ width: "290px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>
            검색 키워드
          </Body2>
        </div>
        <div style={{ width: "130px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>
            등록일자
          </Body2>
        </div>
        <div style={{ width: "100px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>상태</Body2>
        </div>
        <div style={{ width: "110px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>
            미리보기
          </Body2>
        </div>
        <div style={{ display: "flex", width: "150px" }}>
          <EditBdage />
          <RemoveBadge />
        </div>
        <div style={{ width: "90px" }}>
          <Body2 css={{ color: "$BlueGray600", fontWeight: 600 }}>더보기</Body2>
        </div>
      </SiteListTableBody>
    </SitListTable>
  );
};

export default SiteListTable;
