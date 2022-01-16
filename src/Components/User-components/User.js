import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User(props) {
  let params = useParams();
  const componentMode = props.mode;
  console.log(componentMode);
  const userId = params.id;

  //User object attributes
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const creator = null;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/user/${userId}`, {});
      const body = await result.json();
      setName(body.name);
      setLastName(body.lastname);
      setEmail(body.email);
      setRole(body.role);
    };
    fetchData();
  }, [userId]);

  const insertUser = async () => {
    const result = await fetch(`/api/user/create`, {
      method: "post",
      body: JSON.stringify({ name, lastName, email, role }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await result.json();
  };

  const updateUser = async () => {
    const result = await fetch(`/api/user/update/${userId}`, {
      method: "post",
      body: JSON.stringify({ name, lastName, email, role }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await result.json();
  };

  const operationUser = () => {
    if (componentMode === "edit") {
      updateUser();
    } else {
      insertUser();
    }
  };

  if (componentMode === "duplicate") {
  }

  return (
    <div className="form">
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
        <input
          type="text"
          className="form-control"
          id="InputName"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="InputLastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="InputLastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="InputEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="InputEmail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Default select user role"
          value={role}
          defaultValue={role}
          onChange={(event) => setRole(event.target.value)}
        >
          <option selected disabled>
            Role
          </option>
          <option value="owner">Owner</option>
          <option value="admin">Admin</option>
          <option value="visitor">Visitor</option>
          <option value="reviewer">Reviewer</option>
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => operationUser()}
      >
        Save
      </button>
    </div>
  );
}

export default User;
