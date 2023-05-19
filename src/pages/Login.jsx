import React, { useState } from "react";
import GoogleOAuth from "../components/GoogleOAuth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/auth";
import "../style/landingPage.css";
import "../style/login_register.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (email !== "" && password !== "") {
      let data = JSON.stringify({
          email,
          password,
      });

      dispatch(login(data, navigate));    
    }
  };

  return (
    <div className="login">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={onSubmit}>
          <div className="card">
            <div className="card-header">
              <h1>Login To Your Account</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="mb-3">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-control"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer  space-between">
              <Link to={"/"} className="btn btn-danger">
                Close
              </Link>{" "}
              <button
                className="btn btn-success"
                disabled={!email || !password}
                type="submit"
              >
                Login
              </button>{" "}
              <label>or</label>{" "}
              <label>
                <GoogleOAuth buttonText="Login with Google" />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
