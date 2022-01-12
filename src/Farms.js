import farmsData from "./farm-data";
import {
  AiOutlineEdit,
  AiOutlineSetting,
  AiOutlineCopy,
  AiOutlineDelete,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Farms() {
  return (
    <table className="table table-hover" id="farms-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {farmsData.map((farmData, key) => (
          <tr key={key}>
            <th scope="row">{farmData.location}</th>
            <td>
              <Link to={`/farm/${farmData.location}/manage`} className="btn">
                <AiOutlineSetting className="me-2" />
                Menage
              </Link>
              <Link to={`/farm/${farmData.location}`} className="btn">
                <AiOutlineEdit className="me-2" />
                Edit
              </Link>
              <Link to="#" className="btn">
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

export default Farms;
