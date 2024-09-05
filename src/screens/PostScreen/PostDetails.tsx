import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Postdetails = () => {
  const { _id } = useParams();
  const [userInfo, setUserInfo] = useState<any>({});
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://fullstack-student-backend.onrender.com/api/auth/${_id}`
      );
      setUserInfo(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {userInfo?._id}
      {/* <p>{userInfo?.firstName}</p>
      <p>{userInfo?.lastName}</p>
      <p>{userInfo?.email}</p> */}
    </>
  );
};

export default Postdetails;
