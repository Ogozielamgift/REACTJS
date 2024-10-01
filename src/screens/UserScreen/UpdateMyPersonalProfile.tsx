import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResponsiveAppBar from "../../componets/Navbar/Navbar";
import axios from "axios";

const UpdateMyPersonalProfile = () => {
  //   const { _id } = useParams();
  const info = localStorage.getItem("userId");
  console.log(info);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [sucessMsg, setSucessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);
  console.log(confirmpassword);
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    const headers: any = {
      "Content-Type": "application/json",
    };
    axios
      .put(
        `https://fullstack-student-backend.onrender.com/api/auth/update/${info}`,

        data,
        headers
      )
      .then((response: any) => {
        console.log(response.data);
        localStorage.setItem("userId", response.data._id);
        localStorage.setItem("firstName", response.data.firstName);
        navigate("/");
        setLoading(false);
        if (response.data) {
          setSucessMsg("Signup successful");
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
      UpdateMyPersonalProfile
      <ResponsiveAppBar />
      <div>
        <div className="dd flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update user profile
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  FirstName
                </label>
                <div className="mt-2">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="FirstName"
                    name="firstName"
                    type="text"
                    autoComplete="FirstName"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  LastName
                </label>
                <div className="mt-2">
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="LastName"
                    name="LastName"
                    type="text"
                    autoComplete="LastName"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    id="confirm password"
                    name="confirm password"
                    type="password"
                    autoComplete="confirm password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {loading ? (
                <div>Loading.....</div>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update profile
                  </button>
                </div>
              )}
              {errorMsg && (
                <div style={{ color: "white", backgroundColor: "black" }}>
                  {errorMsg}
                </div>
              )}
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Start a 7 day free trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateMyPersonalProfile;
