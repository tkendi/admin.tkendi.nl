import React from "react";
import { VscLoading } from "react-icons/vsc";

import { Wrap } from "./styles/index.style";

import { theme } from "@/styles/stitches.config";

const Loading = () => {
  const { Info600 } = theme["colors"];
  return (
    <Wrap>
      <VscLoading size="24px" color={Info600["value"]} />
    </Wrap>
  );
};

export default Loading;
