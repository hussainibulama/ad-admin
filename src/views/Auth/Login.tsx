import React, { Component } from 'react';
import onboard from '../../assets/images/onboarding.svg';
import profile from '../../assets/icons/Profile.svg';
import lock from '../../assets/icons/Lock.svg';
import show from '../../assets/icons/Show.svg';
import caretRight from '../../assets/icons/continue-arrow.svg';
import './auth.scss';
import '../../common/input.scss';
import instance from '../../axios/authaxios';
interface Props {
  email: string;
  password: string;
  show: boolean;
}

class Login extends Component<Props> {
  state = {
    email: '',
    password: '',
    show: false,
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  Submit = (e) => {
    e.preventDefault();
  };
  async Login() {
    if (this.state.email && this.state.password === '') {
      alert('Fields cannot be empty');
    } else {
      try {
        let res = await instance.post<any>('/admin/v2/login', {
          username: this.state.email,
          password: this.state.password,
        });

        let result = await res.data;
        if (result && result.status === 'success') {
          localStorage.setItem('username', result.data.username);
          localStorage.setItem('accessToken', result.data.token);
          localStorage.setItem('isLoggedin', 'true');
          window.location.replace('/app');
        } else {
          alert(result.message);
        }
      } catch (e) {
        console.log(e);
        alert('Invalid login Details');
      }
    }
  }
  render() {
    return (
      <div className="container-fluid  p-6">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <form action="" onSubmit={this.Submit}>
              <div className="title mb-5">
                <h2 className="dark-green">Log in</h2>
                <p className="dark-green">Hi Good Morning </p>
              </div>
              <div className="form-group position-relative my-4">
                <input
                  type="text"
                  className="form-control input-form"
                  id="email"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Official email"
                  // value={loginFields.referralCode}
                  // onChange={HandleChange}
                />
                <img className="preppend" src={profile} alt="" />
                <img className="append" src="" alt="" />
              </div>
              <div className="form-group position-relative my-4">
                <input
                  type={this.state.show === false ? 'password' : 'text'}
                  className="form-control input-form"
                  id="password"
                  onChange={this.handleChange}
                  name="password"
                  placeholder="Password"
                  // value={loginFields.password}
                  // onChange={HandleChange}
                />
                <img className="preppend" src={lock} alt="" />
                <img
                  onClick={() => this.setState({ show: !this.state.show })}
                  className="append"
                  src={show}
                  alt=""
                />
              </div>
              <button
                onClick={() => this.Login()}
                type="submit"
                className="mt-5 mb-4 auth-button"
              >
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
  }
}

export default Login;
