import React from 'react';
import onboard from '../../assets/images/onboarding.svg';
import profile from '../../assets/icons/Profile.svg';
import lock from '../../assets/icons/Lock.svg';
import show from '../../assets/icons/Show.svg';
import caretRight from '../../assets/icons/continue-arrow.svg';
import './auth.scss';
import '../../common/input.scss';

const Login = () => {
  return (
    <div className="container-fluid  p-6">
      <div className="row justify-content-between">
        <div className="col-md-5">
          <form action="">
            <div className="title mb-5">
              <h2 className="dark-green">Log in</h2>
              <p className="dark-green">Hi Good Morning</p>
            </div>
            <div className="form-group position-relative my-4">
              <input
                type="text"
                className="form-control input-form"
                id="referralCode"
                name="referralCode"
                placeholder="Official email"
                // value={loginFields.referralCode}
                // onChange={HandleChange}
              />
              <img className="preppend" src={profile} alt="" />
              <img className="append" src="" alt="" />
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
            <button type="submit" className="mt-5 mb-4 auth-button">
              Login{' '}
              <span className="ml-3">
                <img src={caretRight} alt="login" />
              </span>
            </button>
            <p>
              cant't login?{' '}
              <span className="green font-weight-bold">
                Reset your password
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

export default Login;
