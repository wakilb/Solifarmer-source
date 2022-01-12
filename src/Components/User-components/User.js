function User() {
  return (
    <form>
      <div className="mb-3">
        <img src="..." className="rounded float-start" alt="..." />
        <label className="input-group-text" htmlFor="inputGroupCSVFile">
          Picture
        </label>
        <input type="file" className="form-control" id="inputGroupCSVFile" />
      </div>

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

      <div className="mb-3">
        <select className="form-select" aria-label="Default select user role">
          <option selected disabled>
            Role
          </option>
          <option value="private">Owner</option>
          <option value="protected">Admin</option>
          <option value="public">Visitor</option>
          <option value="public">Reviewer</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default User;
