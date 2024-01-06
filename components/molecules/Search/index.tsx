import React from "react";
import { FiSearch } from "react-icons/fi";

import { SearchIconWrap, Wrap } from "./style/index.style";

const Search = () => {
  return (
    <Wrap>
      <SearchIconWrap>
        <FiSearch size="24" color="#ffffff" />
      </SearchIconWrap>
    </Wrap>
  );
};

export default Search;
