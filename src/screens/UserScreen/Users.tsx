import axios from "axios";
import React, { useEffect, useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
const Users = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/Contents/");
      setUserInfo(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {userInfo.map((items: any) => (
        <>
          <Link to={`/productDetails/${items?.id}`}>
            <div className="container mt-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-7">
                  <div className="card p-3 py-4">
                    <div className="text-center">
                      <img
                        src="https://i.imgur.com/bDLhJiP.jpg"
                        width="100"
                        className="rounded-circle"
                      />
                    </div>

                    <div className="text-center mt-3">
                      <span className="bg-secondary p-1 px-4 rounded text-white">
                        Pro
                      </span>
                      <h5 className="mt-2 mb-0">{items?.title}</h5>
                      <span>{items?.body}</span>

                      <div className="px-4 mt-1">
                        <p className="fonts"></p>
                      </div>

                      <ul className="social-list">
                        <li>
                          <i className="fa fa-facebook"></i>
                        </li>
                        <li>
                          <i className="fa fa-dribbble"></i>
                        </li>
                        <li>
                          <i className="fa fa-instagram"></i>
                        </li>
                        <li>
                          <i className="fa fa-linkedin"></i>
                        </li>
                        <li>
                          <i className="fa fa-google"></i>
                        </li>
                      </ul>

                      <div className="buttons">
                        <button className="btn btn-outline-primary px-4">
                          Message
                        </button>
                        <button className="btn btn-primary px-4 ms-3">
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* <p>{items?.name}</p>
          <p>{items?.email}</p>
          <p>{items?.address?.city}</p>
          <p>{items?.id}</p>
          <p>{items?.phone}</p>
          <p>{items?.username}</p>
          <p>{items?.website}</p>
          <p>{items?.company?.name}</p> */}
        </>
      ))}
    </div>
  );
};

export default Users;
