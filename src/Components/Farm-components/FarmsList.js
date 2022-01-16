import {
  AiOutlineEdit,
  AiOutlineSetting,
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlinePlus,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function FarmsList() {
  const [farmsDataFetched, setfarmsDataFetched] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/farms`, {});
      const body = await result.json();
      setfarmsDataFetched(body);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col opertaion-btn align-self-end p-2">
          <Link to={"/farm/create"} className="btn btn-lg">
            <AiOutlinePlus className="me-2" />
            Create
          </Link>
        </div>
        <table className="table table-hover table-list" id="farms-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {farmsDataFetched.map((farmDataFetched, key) => (
              <tr key={key}>
                <th scope="row">{farmDataFetched.location}</th>
                <td>
                  <Link
                    to={`/farm/${farmDataFetched._id}/manage`}
                    className="btn"
                  >
                    <AiOutlineSetting className="me-2" />
                    Menage
                  </Link>
                  <Link to={`/farm/${farmDataFetched._id}`} className="btn">
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
      </div>
    </div>
  );
}

export default FarmsList;
