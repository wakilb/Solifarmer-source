import Select from "react-select";
import usersData from "./user-data";

function AddFarm() {
  const ownerOptions = usersData
    .filter((usersData) => usersData.role === "Owner")
    .map((userData) => {
      return userData["name"];
    });
  console.log(usersData);
  console.log(ownerOptions);
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="InputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="InputName"
          aria-describedby="nameHelp"
        />
        <div id="nameHelp" className="form-text">
          Type the name of the farm
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="SelectOwners" className="form-label">
          Owners
        </label>
        <Select options={usersData} />
      </div>

      <div className="mb-3">
        <label htmlFor="SelectStaff" className="form-label">
          Staff
        </label>
        <Select options={usersData} />
      </div>

      <div className="mb-3">
        <label htmlFor="SelectVisitors" className="form-label">
          Visitors
        </label>
        <Select options={usersData} />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Size</span>
        <input
          id="inputSize"
          type="number"
          min="1"
          className="form-control"
          aria-label=""
        />
        <span className="input-group-text">m2</span>
      </div>

      <select className="form-select" aria-label="Default select farm privacy">
        <option value="private">Private</option>
        <option value="protected">Protected</option>
        <option value="public">Public</option>
      </select>

      <div className="mb-3">
        <label htmlFor="InputLocation" className="form-label">
          Location
        </label>
        <input type="url" className="form-control" id="InputLocation" />
      </div>

      <div className="mb-3">
        <label htmlFor="TextareaExtraInfo" class="form-label">
          Extra Information
        </label>
        <textarea
          className="form-control"
          id="TextareaExtraInfo"
          rows="3"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddFarm;
