import usersData from "./user-data";

function AddUser() {
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
        <img src="..." className="rounded float-start" alt="..." />
        <label className="input-group-text" htmlFor="inputGroupPictureFile">
          Picture
        </label>
        <input
          type="file"
          className="form-control"
          id="inputGroupPictureFile"
        />
      </div>

      <select className="form-select" aria-label="Default select user role">
        <option selected disabled>
          Role
        </option>
        <option value="private">Owner</option>
        <option value="protected">Admin</option>
        <option value="public">Visitor</option>
        <option value="public">Reviewer</option>
      </select>

      <div className="mb-3">
        <label htmlFor="InputName" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="InputName" />
      </div>

      <div className="mb-3">
        <label htmlFor="InputLastName" className="form-label">
          Last name
        </label>
        <input type="text" className="form-control" id="InputLastName" />
      </div>

      <div className="mb-3">
        <label htmlFor="InputEmail" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="InputEmail" />
      </div>

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default AddUser;
