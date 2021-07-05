import React from "react"
import styled from "styled-components"

const ErrorCode = () => {
    return (
      <StyledDiv>
        <div className="first-grid-error">
          <div>
            <h5 className="err">Error Code: 404</h5>
            <div className="mt-3 error-text">
              tuyiurfhdruheriuhffuioerhfbrneifewr77fh34ituyiurfhdruheriuhffuioerhfbrneifewr77fh34irtuyiurfhdruheriuhffuioerhfbrneifewr77fh34irtuyiurfhdruheriuhffuioerhfbrneifewr77fh34ir
              tuyiurfhdruheriuhffuioerhfbrneifewr77fh34ituyiurfhdruheriuhffuioerhfbrneifewrtuyiurfhdruheriuhffuioerhfbrneifewr77fh34ituyiurfhdruheriuhffuioerhfbrneifewr
              tuyiurfhdruheriuhffuioerhfbrneifewr77fh34ituyiurfhdruheriuhffuioerhfbrneifewr
            </div>
          </div>
          <div>
            <h5 className="fix">Fix</h5>
            <div className="fix-div mt-3">
              <ul>
                <li>Fix transaction API</li>
                <li>User-transaction-missing</li>
              </ul>
            </div>
          </div>
        </div>
      </StyledDiv>
    );
}

export default ErrorCode;

const StyledDiv = styled.div`
  margin: 0rem 2rem;
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem;

  .first-grid-error {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
  .error-text {
    background: rgba(203, 0, 11, 0.1);
    border-radius: 10px;
    padding: 1.2rem;
    width: 90%;
    word-break: break-word;
    color: #e31a1c;
  }
  .err {
    color: #cb000b;
  }
  .fix {
    color: #029244;
  }
  .fix-div {
    background: rgba(0, 168, 90, 0.1);
    border: 1px solid #029244;
    border-radius: 10px;
    padding: 1.2rem;
    color: #029244;
  }
`;

