import React from "react"
import styled from "styled-components"
import StarColor from "../../assets/icons/StarColor.svg"
import ShowTable from "../../assets/icons/TableShow.svg"

const AppTable = () => {
    return (
      <StyledTable>
        <table className="app-table table-borderless">
          <thead className="table-head">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Star</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>1</td>
              <td>JANE001</td>
              <td>
                <span>
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
              </td>
              <td className="msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat consectetur scelerisque pulvinar ultricies id eget
                pellentesque pharetra integer. A, lorem morbi neque pellentesque
                velit condimentum varius. Scelerisque nullam mattis sodales mi
                mus sollicitudin sed tristique eget. Ac donec blandit molestie
                fusce vitae eget pharetra diam. Consequat non maecenas at
                placerat
              </td>
              <td className="time-div">
                <div className="time-date">12/05/2021</div>
                <div className="eye-img">
                  <img src={ShowTable} alt="" />
                </div>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>JANE001</td>
              <td>
                <span>
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
              </td>
              <td className="msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat consectetur scelerisque pulvinar ultricies id eget
                pellentesque pharetra integer. A, lorem morbi neque pellentesque
                velit condimentum varius. Scelerisque nullam mattis sodales mi
                mus sollicitudin sed tristique eget. Ac donec blandit molestie
                fusce vitae eget pharetra diam. Consequat non maecenas at
                placerat
              </td>
              <td className="time-div">
                <div className="time-date">12/05/2021</div>
                <div className="eye-img">
                  <img src={ShowTable} alt="" />
                </div>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>JANE001</td>
              <td>
                <span>
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
                <span className="ml-2">
                  <img src={StarColor} alt="" />
                </span>
              </td>
              <td className="msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat consectetur scelerisque pulvinar ultricies id eget
                pellentesque pharetra integer. A, lorem morbi neque pellentesque
                velit condimentum varius. Scelerisque nullam mattis sodales mi
                mus sollicitudin sed tristique eget. Ac donec blandit molestie
                fusce vitae eget pharetra diam. Consequat non maecenas at
                placerat
              </td>
              <td className="time-div">
                <div className="time-date">12/05/2021</div>
                <div className="eye-img">
                  <img src={ShowTable} alt="" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </StyledTable>
    );
}


const StyledTable = styled.div`
  .app-table {
    background: #fff;
    border-radius: 5px;
    color: #045860;
    border-collapse: none;
    border-spacing: 0 15px;
    align-items: flex-start;
    width: 100%;
    border-spacing: 0px 15px;
    border-collapse: separate !important;
  }

  .table-body {
    position: relative;
    width: 80%;
    background: #fff;
  }
  .table-head > tr {
    background: rgba(231, 255, 237, 0.42);
    height: 150px;
    position: relative;
    width: 80%;
  }
  th {
    font-weight: 700;
  }
  td {
    word-break: break-all;
    max-width: 120px;
  }
  tr {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
  .table-body > tr:first-child {
    background: #e5f6ef;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 1rem;
    position: relative;
    bottom: 2rem;
  }
  td,
  th {
    padding: 1rem;
  }
  td:first-child,
  th:first-child {
    padding-left: 2rem;
  }
  td:last-child,
  th:last-child {
    padding-right: 2rem;
  }
  .msg {
    color: #263238;
  }
  td {
    vertical-align: top;
  }
  .time-date {
    font-weight: 600;
    font: 2.6rem;
  }
  .time-div {
    position: relative;
  }
  .eye-img {
    position: relative;
    top: 10rem;
    left: 6rem;
  }
`;
export default AppTable