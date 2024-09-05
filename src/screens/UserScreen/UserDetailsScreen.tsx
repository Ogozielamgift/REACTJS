import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetailsScreen = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<any>({});
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUserInfo(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>{userInfo?.id}</p>
      <p>{userInfo?.name}</p>
      <p>{userInfo?.company?.name}</p>
    </div>
  );
};

export default UserDetailsScreen;
