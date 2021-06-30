import React from 'react';
import onboard from '../../assets/images/bro.svg';
import lock from '../../assets/icons/Lock.svg';
import show from '../../assets/icons/Show.svg';
import caretRight from '../../assets/icons/continue-arrow.svg';
import './auth.scss';
import '../../common/input.scss';

const NewPassword = () => {
  return (
    <div className="container-fluid  p-6">
      <div className="row justify-content-between">
        <div className="col-md-5">
          <form action="">
            <div className="title mb-5">
              <h2 className="dark-green">New Password</h2>
            </div>

            <div className="form-group position-relative my-4">
              <input
                type="password"
                className="form-control input-form"
                id="password"
                name="password"
                placeholder="Password"
                // value={loginFields.password}
                // onChange={HandleChange}
              />
              <img className="preppend" src={lock} alt="" />
              <img className="append" src={show} alt="" />
            </div>
            <div className="form-group position-relative my-4">
              <input
                type="confirmPassword"
                className="form-control input-form"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirmPassword"
                // value={loginFields.password}
                // onChange={HandleChange}
              />
              <img className="preppend" src={lock} alt="" />
              <img className="append" src={show} alt="" />
            </div>
            <button type="submit" className="mt-5 mb-4 auth-button">
              Continue{' '}
              <span className="ml-3">
                <img src={caretRight} alt="login" />
              </span>
            </button>
            <p>
              <span className="dark-green font-weight-bold">
                Return to{' '}
                <a href="./login" className="green font-weight-bold">
                  login
                </a>
              </span>
            </p>
          </form>
        </div>
        <div className="character col-md-5">
          <div className="character-img">
            {' '}
            <img src={onboard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
