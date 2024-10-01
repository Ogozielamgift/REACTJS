import axios from "axios";
import React, { useEffect, useState } from "react";

const ResultDetails = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://result.ourworldintschool.ng/api/results"
      );
      setUserInfo(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      ResultDetails
      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>schoolRegNumber</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>year</th>
            <th>HmRemark</th>
            <th>Remark</th>
            <th>position</th>
            <th>TotalAverage</th>
            <th>TotalGrade</th>
            <th>TotalScore</th>
            <th>createdAt</th>
            <th>deActivateResultEdith</th>
            <th>numberInClass</th>
            <th>School</th>
            <th>Subject</th>
            <th>term</th>
            <th>subjectName</th>
            <th>totalScore</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((items: any) => (
            <>
              <tr>
                <td>{items?.user._id}</td>
                <td>{items?.user.schoolRegNumber}</td>
                <td>{items?.user.firstName}</td>
                <td>{items?.user.lastName}</td>
                <td>{items?.year}</td>
                <td>{items?.HmRemark}</td>
                <td>{items?.Remark}</td>
                <td>{items?.Position}</td>
                <td>{items?.TotalAverage}</td>
                <td>{items?.TotalGrade}</td>
                <td>{items?.TotalScore}</td>
                <td>{items?.createdAt}</td>
                <td>{items?.deActivateResultEdith}</td>
                <td>{items?.numberInClass}</td>
                <td>{items?.school.address}</td>
                <td>{items?.school.city}</td>
                <td>{items?.school.country}</td>
                <td>{items?.school.name}</td>
                <td>{items?.school.phoneNumber}</td>
                <td>{items?.school.state}</td>
                <td>{items?.school.postalCode}</td>
                <td>{items?.school.schoolLogo}</td>
                <td>{items?.school.schoolStamp}</td>
                <td>{items?.school._id}</td>
                <td>
                  {items?.subjects?.map((list: any) => (
                    <>
                      {list?.classes}
                      {list?.term}
                      <div>
                        {list?.subjects?.map((item: any) => (
                          <>
                            {item?.subjectName}
                            {item?.totalScore}
                            {item?.test}
                          </>
                        ))}
                      </div>
                    </>
                  ))}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultDetails;
