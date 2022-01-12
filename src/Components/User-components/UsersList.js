import usersData from "../../user-data";
import { AiOutlineEdit, AiOutlineCopy, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function UsersList() {
  return (
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
        {usersData.map((userData) => (
          <tr>
            <th>{userData.name}</th>
            <td>{userData.role}</td>
            <td>{userData.email}</td>
            <td>
              <Link to={`/user/edit/${userData.name}`} className="btn">
                <AiOutlineEdit className="me-2" />
                Edit
              </Link>
              <Link to={`/user/new/${userData.name}`} className="btn">
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
  );
}

export default UsersList;
