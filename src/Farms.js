import farmsData from "./farm-data";
import {
  AiOutlineEdit,
  AiOutlineSetting,
  AiOutlineCopy,
  AiOutlineDelete,
} from "react-icons/ai";

function Farms() {
  return (
    <table className="table table-hover" id="farms-list">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {farmsData.map((farmData) => (
          <tr>
            <th scope="row">{farmData.location}</th>
            <td>
              <a href="#" className="btn">
                <AiOutlineSetting className="me-2" />
                Menage
              </a>
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

export default Farms;
