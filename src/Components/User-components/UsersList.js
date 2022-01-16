import { useState, useEffect } from "react";
import {
  AiOutlineEdit,
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlinePlus,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function UsersList() {
  const [usersDataFetched, setUsersDataFetched] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/users`, {});
      const body = await result.json();
      setUsersDataFetched(body);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col opertaion-btn align-self-end p-2">
          <Link to={"/user/create"} className="btn btn-lg">
            <AiOutlinePlus className="me-2" />
            Create
          </Link>
        </div>
        <table className="table table-hover table-list" id="farms-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersDataFetched.map((userDataFetched) => (
              <tr>
                <th>{userDataFetched.name}</th>
                <td>{userDataFetched.role}</td>
                <td>{userDataFetched.email}</td>
                <td>
                  <Link
                    to={`/user/edit/${userDataFetched._id}`}
                    className="btn"
                  >
                    <AiOutlineEdit className="me-2" />
                    Edit
                  </Link>
                  <Link
                    to={`/user/create/${userDataFetched._id}`}
                    className="btn"
                  >
                    <AiOutlineCopy className="me-2" />
                    Duplicate
                  </Link>
                  <Link to="#" className="btn">
                    <AiOutlineDelete className="me-2" />
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
