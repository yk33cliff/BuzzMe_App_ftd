import React, {useEffect, useState} from "react";

import ajaxSchool from "../../util/remote/ajaxSchool";
import useStateCallback from "../../util/customHooks/useStateCallback";
import ChangeSchoolUserStatus from "./ChangeSchoolUserStatus";
function ListSchoolUsers(props) {
  const [schoolUsers, setSchoolUsers] = useState([]);

  useEffect(() => {
    getSchoolUsers();
  }, []);

  const getSchoolUsers = async () => {
    try {
      const data = {
        school_id: props.school,
      };
      const serverResponse = await ajaxSchool.fetchSchoolUserList(data);
      if (serverResponse.status === "OK") {
        setSchoolUsers(serverResponse.details);
      } else {
        // Handle error condition
        console.error("Error:", serverResponse.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };
  // const [changeStatus, setChangeStatus] = useStateCallback(false);
  // const handle_change_status = (id) => {
  //   setChangeStatus(false, () =>
  //     setChangeStatus(<ChangeSchoolUserStatus isOpen={true} id={id} />)
  //   );
  // };

  return (
    <div className="card height-auto">
      {/* {changeStatus} */}
      <div className="card-body">
        <div className="heading-layout1">
          <div className="item-title">
            <h3>School Administrators</h3>
          </div>
          {/* Dropdown menu */}
        </div>
        {/* Search form */}
        {/* Table */}
        <div className="table-responsive">
          <table className="table display data-table text-nowrap">
            <thead>
              <tr>
                <th>ID</th>
                <th>Names</th>
                {props.school !== null && (
                  <>
                    <th>School Name</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {schoolUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.names}</td>
                  {props.school !== null && user.school ? (
                    <>
                      <td>{user.school.school_name}</td>
                      <td>{user.school.contact}</td>
                      <td>{user.school.email}</td>
                     
                    </>
                  ) : (
                    <td colSpan="8" style={{textAlign:"center"}}>No school admins Registered</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListSchoolUsers;
