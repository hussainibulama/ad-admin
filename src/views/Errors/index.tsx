import React from "react"
import styled from "styled-components"
import ErrorTable from './ErrorTable';
import ErrorViewChart from './ErrorViewChart';
const Errors = () => {
    return (
      <StyledErrors>
        <ErrorViewChart />
        <ErrorTable />
      </StyledErrors>
    )
}

const StyledErrors = styled.div``

export default Errors;