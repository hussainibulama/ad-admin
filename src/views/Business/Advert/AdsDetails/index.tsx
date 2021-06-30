import React from "react"
import styled from "styled-components"
import GraphView from './GraphView';
import DetailsView from './DetailsView';

const AdsDetails = () => {
return (
  <StyledDiv>
        <GraphView />
        <DetailsView />
  </StyledDiv>
);
}

const StyledDiv = styled.div`
  
`;

export default AdsDetails;