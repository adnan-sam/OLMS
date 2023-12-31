import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../../../Context/AuthContext";
import axios from "axios";

const Profile = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(AuthContext);
  const [adminDetails, setAdminDetails] = useState(null);

  useEffect(() => {
    const getadminDetails = async () => {
      try {
        const response = await axios.get(
          API_URL + "api/users/getuser/" + user._id
        );
        setAdminDetails(response.data);
      } catch (err) {
        console.log("Error in fetching the member details");
      }
    };
    getadminDetails();
  }, [API_URL, user]);

  return (
    <div>
      <div className="dashboard-option-content">
    <div className="member-profile-content" id="profile@member">
      <div className="admin-details-topbar">
        <img
          className="user-profileimage"
          src="./assets/images/Profile.png"
          alt=""
        ></img>
        <div className="user-info">
          <p className="user-name">{adminDetails?.userFullName}</p>
          <p className="user-id">
            {adminDetails?.userType === "Student"
              ? adminDetails?.admissionId
              : adminDetails?.employeeId}
          </p>
          <p className="user-email">{adminDetails?.email}</p>
          <p className="user-phone">{adminDetails?.mobileNumber}</p>
          <p className="user-email">{adminDetails?.address}</p>
        </div>
      </div>
      <div className="user-details-specific">
        <div className="specific-left">
          <div className="specific-left-top">
            <p className="specific-left-topic">
              <span style={{ fontSize: "18px" }}>
                <b>You are an Admin</b>
              </span>
            </p>
          </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Profile;
