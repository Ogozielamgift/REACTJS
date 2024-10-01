import React, { useState } from "react";
import ResponsiveAppBar from "../../componets/Navbar/Navbar";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sucessMsg, setSucessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(email);
  console.log(password);
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      password: password,
    };

    const headers: any = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        `https://fullstack-student-backend.onrender.com/api/auth/login`,

        data,
        headers
      )
      .then((response: any) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("password", response.data.password);
        navigate("/");
        setLoading(false);
        if (response.data) {
          setSucessMsg("Login successful");
        } else {
        }
      })
      .catch((error: any) => {
        setLoading(false);
        setErrorMsg("invalid credentials, failed to create user");
      });
  };
  return (
    <>
      <ResponsiveAppBar />
      <div>
        <section className="vh-100" style={{ backgroundColor: "#9A616D;" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem;" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem;" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form action="#" method="post" onSubmit={handleSubmit}>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            ></i>
                            <span className="h1 fw-bold mb-0">Logo</span>
                          </div>
                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>
                          <div
                            data-mdb-input-init
                            className="form-outline mb-4"
                          >
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example17"
                            >
                              Email address
                            </label>
                          </div>
                          <div
                            data-mdb-input-init
                            className="form-outline mb-4"
                          >
                            <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              id="form2Example27"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example27"
                            >
                              Password
                            </label>
                          </div>
                          {loading ? (
                            <div>loading......</div>
                          ) : (
                            <div>
                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className=" but btn btn-dark btn-lg btn-block"
                                type="submit"
                              >
                                Login
                              </button>
                            </div>
                          )}
                          {errorMsg && (
                            <div style={{ backgroundColor: "red" }}>
                              {errorMsg}
                            </div>
                          )}

                          <a className="small text-muted" href="#!">
                            Forgot password?
                          </a>
                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            Don't have an account?{" "}
                            <a href="#!" style={{ color: "blue" }}>
                              Register here
                            </a>
                          </p>
                          <a href="#!" className="small text-muted">
                            Terms of use.
                          </a>
                          <a href="#!" className="small text-muted">
                            Privacy policy
                          </a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
