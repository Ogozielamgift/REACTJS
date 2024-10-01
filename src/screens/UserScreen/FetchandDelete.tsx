import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const FetchandDelete = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/auth"
      );
      setUserInfo(data);
    };
    fetchData();
  }, []);
  const deletehandler = (_id: any) => {
    // console.log("Hello");
    axios
      .delete(
        `https://fullstack-student-backend.onrender.com/api/auth/delete/${_id}`
      )
      .then(() => {
        alert("Delete successful");
        window.location.reload();
      })
      .catch((err) => {
        alert("Failed");
      });
  };

  return (
    <div>
      FetchandDelete
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((items: any) => (
            <>
              <tr>
                <td>{items?.firstName}</td>
                <td>{items?.lastName}</td>
                <td>{items?.email}</td>
                <td>
                  <FaEdit style={{ color: "green" }} />
                </td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => deletehandler(items?._id)}
                >
                  <MdDeleteForever style={{ color: "red" }} />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchandDelete;
