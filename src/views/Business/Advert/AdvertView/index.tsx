import React from "react"
import styled from "styled-components"
import AdvertViewTable from './AdvertViewTable';
import AdvertViewChart from './AdvertViewChart';

const AdvertView = () => {
    return (
      <StyledDiv>
        <AdvertViewChart />
        <AdvertViewTable />
      </StyledDiv>
    );
}

const StyledDiv = styled.div`
margin: 1rem;`

export default AdvertView;