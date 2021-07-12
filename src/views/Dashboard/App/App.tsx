import React from 'react';
import { Chart1, Chart2 } from './Charts';
import orange from '../../../assets/icons/orangeDownload.svg';
import green from '../../../assets/icons/greenDownload.svg';
import Dots from '../Overview/Dots';
import Table from './AppTable';
import UpdateBtn from '../AppBuild/UpdateBtn';
import Duration from '../Referrals/Duration';

import styled from 'styled-components';
const App = () => {
  return (
    <AppWrapper>
      <div className="App-Charts">
        <div className="app-line-graph mr-4">
          <Chart1 />
          <div className="legends">
            <Dots
              legendName={'Download'}
              legendColor={'#F4C201'}
              width={'10px'}
              height={'10px'}
              textColor={'#023439'}
              margin={'.5rem'}
            />
            <Dots
              legendName={'Update'}
              legendColor={'#00A85A'}
              width={'10px'}
              height={'10px'}
              textColor={'#023439'}
              margin={'.5rem'}
            />
          </div>
        </div>
        <div className="doughnut-graph">
          <div className="float-right">
            <Duration />
          </div>
          <div className="mini-chart">
            <div className="charts">
              <Chart2 />
            </div>

            <div className="chart-details">
              <div className="chart-download">
                <img src={orange} alt="" />

                <div className="download-title ml-1">
                  <p>Total Downloads</p>
                  <p className="number">780</p>
                </div>
              </div>

              <div className="chart-download mt-3">
                <img src={green} alt="" />
                <div className="download-title ml-1">
                  <p>Total Update</p>
                  <p className="number">273770</p>
                </div>
              </div>
            </div>
          </div>
          <div className="float-right updates">
            <UpdateBtn />
          </div>
        </div>
      </div>

      <div className="app-table">
        <div className="app-header">
          <h2>User pending update</h2>
          <Duration all={true} />
        </div>

        <Table />
      </div>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  .App-Charts,
  .mini-chart,
  .chart-download,
  .legends,
  .mini-leg {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .legends {
    justify-content: center;
    margin-top: 2rem;

    p {
      margin: 0;
    }
  }

  .app-line-graph {
    padding: 2rem 2rem 1rem 2rem;
  }

  .app-line-graph,
  .doughnut-graph {
    flex-basis: 50%;
    border-radius: 10px;
    background-color: #fff;
  }

  .doughnut-graph {
    padding: 2rem 1rem 2rem 2rem;
  }
  .chart-details {
    margin-right: 1rem;
  }
  .chart-download {
    align-items: flex-start;
    justify-content: flex-start;
    p {
      margin: 0;
    }
  }

  .download-title {
    color: #045860;
  }
  .download-title p:first-child {
  }
  .download-title p:last-child {
    font-weight: bold;
    font-size: 1.4rem;
  }
  .updates {
    margin: 1rem 0;
    margin-right: 2rem;
  }
  .mini-chart {
    clear: both;
  }

  .charts {
    width: 70%;
  }

  .app-table {
    width: 100%;
    margin: 1rem 0;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
  }
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      color: #045860;
    }
  }

  @media screen and (max-width: 767px) {
    .App-Charts,
    .app-header {
      margin: 1rem 0;
      flex-direction: column;
      align-items: center;
    }
    .App-Charts {
      margin-left: 2rem;
    }
    .app-line-graph,
    .doughnut-graph {
      z-index: 2;
      flex-basis: 100%;
      margin: 1rem 0;
    }
  }
`;

export default App;
