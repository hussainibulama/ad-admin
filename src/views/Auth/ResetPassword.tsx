import React from 'react';
import onboard from '../../assets/images/bro.svg';
import profile from '../../assets/icons/Profile.svg';
import caretRight from '../../assets/icons/continue-arrow.svg';
import './auth.scss';
import '../../common/input.scss';

const ResetPassword = () => {
  return (
    <div className="container-fluid  p-6">
      <div className="row justify-content-between">
        <div className="col-md-5">
          <form action="">
            <div className="title mb-5">
              <h2 className="dark-green">Reset Password</h2>
              <span className="dark-green">
                Input your official email, password reset link will be sent to
                you.
              </span>
            </div>

            <div className="form-group position-relative my-4">
              <input
                type="text"
                className="form-control input-form"
                id="email"
                name="email"
                placeholder="Official email"
                // value={loginFields.email}
                // onChange={HandleChange}
              />
              <img className="preppend" src={profile} alt="" />
              <img className="append" src="" alt="" />
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

export default ResetPassword;
