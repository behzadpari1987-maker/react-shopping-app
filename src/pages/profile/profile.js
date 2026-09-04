import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();


  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

      navigate("/login");

      return;
    }


    const savedUser =
      localStorage.getItem("user");

    if (savedUser) {

      setUser(JSON.parse(savedUser));

    }

  }, [navigate]);


  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");

  };


  if (!user) {
    return null;
  }


  return (
    <div className="container mt-4">

      <h2>Profile</h2>

      <p>
        <strong>First Name:</strong>{" "}
        {user.firstName}
      </p>

      <p>
        <strong>Last Name:</strong>{" "}
        {user.lastName}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {user.email}
      </p>


      <button
        onClick={handleLogout}
        className="btn btn-danger"
      >
        Logout
      </button>

    </div>
  );
};