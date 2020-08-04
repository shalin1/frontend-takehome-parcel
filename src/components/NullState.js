import styled from "styled-components";
import React from "react";

const NullState = ({ children }) => {
  return <NullStateContainer>{children}</NullStateContainer>;
};

const NullStateContainer = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

export default NullState;
