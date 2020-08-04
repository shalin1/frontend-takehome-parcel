import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WiredProgress } from "wired-progress";
import useInterval from "../hooks/useInterval";

const Loading = () => {
  const [percentage, setPercentage] = useState(25);

  useInterval(() => {
    percentage < 100 ? setPercentage(percentage + 1) : setPercentage(0);
  }, 25);

  return (
    <LoadingContainer>
      <wired-progress value={percentage} style={{ width: "100%" }} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  margin: 2rem;
  width: 100%;
`;

Loading.propTypes = {};

export default Loading;
