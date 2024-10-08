import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";
export const Post = () => {
  const [userPost, setUserPost] = useState([]);
  console.log(userPost);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/Contents/"
      );
      setUserPost(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {userPost.map((items: any) => (
        <>
          <Link to={`/update/${items?.firstName}/${items?._id}`}>
            <div className="container">
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="card chat-app">
                    <div id="plist" className="people-list">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                      </div>
                      <ul className="list-unstyled chat-list mt-2 mb-0">
                        <li className="clearfix">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt="avatar"
                          />
                          <div className="about">
                            <div className="name">{items?._id}</div>
                            <div className="status">
                              {" "}
                              <i className="fa fa-circle offline"></i> left 7
                              mins ago{" "}
                            </div>
                          </div>
                        </li>
                        <li className="clearfix active">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt="avatar"
                          />
                          <div className="about">
                            <div className="name"></div>
                            <div className="status">
                              {" "}
                              <i className="fa fa-circle online"></i> online{" "}
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            alt="avatar"
                          />
                          <div className="about">
                            <div className="name">Mike Thomas</div>
                            <div className="status">
                              {" "}
                              <i className="fa fa-circle online"></i> online{" "}
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="avatar"
                          />
                          <div className="about">
                            <div className="name">Christian Kelly</div>
                            <div className="status">
                              {" "}
                              <i className="fa fa-circle offline"></i> left 10
                              hours ago{" "}
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar8.png"
                            alt="avatar"
                          />
                          <div className="about">
                            <div className="name">Monica Ward</div>
                            <div className="status">
                              {" "}
                              <i className="fa fa-circle online"></i> online{" "}
                            </div>
                          </div>
                        </li>
                        <li className="clearfix">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            alt="avatar"
                          />
                          <div className="about">
                            <div className="name">Dean Henry</div>
                            <div className="status">
                              {" "}
                              <i className="fa fa-circle offline"></i> offline
                              since Oct 28{" "}
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="chat">
                      <div className="chat-header clearfix">
                        <div className="row">
                          <div className="col-lg-6">
                            <a
                              href="javascript:void(0);"
                              data-toggle="modal"
                              data-target="#view_info"
                            >
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                alt="avatar"
                              />
                            </a>
                            <div className="chat-about">
                              <h6 className="m-b-0">{items?.firstName}</h6>
                              <h6>{items?.lastName}</h6>
                              {/* <h6>{items?.address.street}</h6>
                              <h6>{items?.address.suite}</h6>
                              <h6>{items?.address.city}</h6>
                              <h6>{items?.address.zipcode}</h6>
                              <h6>{items?.address.geo.lat}</h6>
                              <h6>{items?.address.geo.lng}</h6> */}
                              <small>{items?.email}</small>
                            </div>
                          </div>
                          <div className="col-lg-6 hidden-sm text-right">
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-secondary"
                            >
                              <i className="fa fa-camera"></i>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-primary"
                            >
                              <i className="fa fa-image"></i>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-info"
                            >
                              <i className="fa fa-cogs"></i>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="btn btn-outline-warning"
                            >
                              <i className="fa fa-question"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="chat-history">
                        <ul className="m-b-0">
                          <li className="clearfix">
                            <div className="message-data text-right">
                              <span className="message-data-time">
                                10:10 AM, Today
                              </span>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                alt="avatar"
                              />
                            </div>
                            <div className="message other-message float-right">
                              {" "}
                              Hi Aiden, how are you? How is the project coming
                              along?{" "}
                            </div>
                          </li>
                          <li className="clearfix">
                            <div className="message-data">
                              <span className="message-data-time">
                                10:12 AM, Today
                              </span>
                            </div>
                            <div className="message my-message">
                              {items?.body}
                            </div>
                          </li>
                          <li className="clearfix">
                            <div className="message-data">
                              <span className="message-data-time">
                                10:15 AM, Today
                              </span>
                            </div>
                            <div className="message my-message">
                              Project has been already finished and I have
                              results to show you.
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="chat-message clearfix">
                        <div className="input-group mb-0">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fa fa-send"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter text here..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Post;
