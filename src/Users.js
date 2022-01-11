import usersData from "./user-data";
import { AiOutlineEdit, AiOutlineCopy, AiOutlineDelete } from "react-icons/ai";

function Users() {
  return (
    <table className="table table-hover" id="farms-list">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Role</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((userData) => (
          <tr>
            <th scope="row">{userData.name}</th>
            <td scope="row">{userData.role}</td>
            <td scope="row">{userData.email}</td>
            <td>
              <a href="#" className="btn">
                <AiOutlineEdit className="me-2" />
                Edit
              </a>
              <a href="#" className="btn">
                <AiOutlineCopy className="me-2" />
                Duplicate
              </a>
              <a href="#" className="btn">
                <AiOutlineDelete className="me-2" />
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;
