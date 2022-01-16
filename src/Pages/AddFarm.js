import Select from "react-select";
import { useState, useEffect } from "react";
import usersData from "../user-data";
import { useParams } from "react-router-dom";
import { store } from "react-notifications-component";

function AddFarm(props) {
  /*   const ownerOptions = usersData
    .filter((usersData) => usersData.role === "Owner")
    .map((userData) => {
      return userData["name"];
    });
  console.log(usersData);
  console.log(ownerOptions); */
  let params = useParams();
  const componentMode = props.mode;
  console.log(componentMode);
  const farmId = params.id;

  const notification = {
    title: "Wonderful!",
    message: "Configurable",
    type: "success",
    insert: "top",
    container: "top-right",
  };
  //User object attributes
  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [owners, setOwners] = useState("");
  const [staff, setStaff] = useState("");
  const [visitors, setVisitors] = useState("");
  const [size, setSize] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [location, setLocation] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const creator = null;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/user/${farmId}`, {});
      const body = await result.json();
      setName(body.name);
      setOwners(body.owners);
      setStaff(body.staff);
      setVisitors(body.visitors);
      setSize(body.size);
      setPrivacy(body.privacy);
      setLocation(body.location);
    };
    fetchData();
  }, [farmId]);

  const insertFarm = async () => {
    const result = null;
    await fetch(`/api/farm/create`, {
      method: "post",
      body: JSON.stringify({
        name,
        owners,
        staff,
        visitors,
        size,
        privacy,
        location,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("notification");
      store.addNotification({ notification });
    });

    const body = await result.json();
  };

  const updateFarm = async () => {
    const result = await fetch(`/api/user/update/${farmId}`, {
      method: "post",
      body: JSON.stringify({
        name,
        owners,
        staff,
        visitors,
        size,
        privacy,
        location,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("notification");
      store.addNotification({ notification });
    });
    const body = await result.json();
  };

  const operationFarm = () => {
    if (componentMode === "edit") {
      updateFarm();
    } else {
      insertFarm();
    }
  };

  if (componentMode === "duplicate") {
  }

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
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div id="nameHelp" className="form-text">
          Type the name of the farm
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="SelectOwners" className="form-label">
          Owners
        </label>
        <Select
          options={usersData}
          value={owners}
          onChange={(event) => setOwners(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="SelectStaff" className="form-label">
          Staff
        </label>
        <Select
          options={usersData}
          value={staff}
          onChange={(event) => setStaff(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="SelectVisitors" className="form-label">
          Visitors
        </label>
        <Select
          options={usersData}
          value={visitors}
          onChange={(event) => setVisitors(event.target.value)}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Size</span>
        <input
          id="inputSize"
          type="number"
          min="1"
          className="form-control"
          aria-label=""
          value={size}
          onChange={(event) => setSize(event.target.value)}
        />
        <span className="input-group-text">m2</span>
      </div>

      <select
        className="form-select"
        aria-label="Default select farm privacy"
        value={privacy}
        onChange={(event) => setPrivacy(event.target.value)}
      >
        <option value="private">Private</option>
        <option value="protected">Protected</option>
        <option value="public">Public</option>
      </select>

      <div className="mb-3">
        <label htmlFor="InputLocation" className="form-label">
          Location
        </label>
        <input
          type="url"
          className="form-control"
          id="InputLocation"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="TextareaExtraInfo" class="form-label">
          Extra Information
        </label>
        <textarea
          className="form-control"
          id="TextareaExtraInfo"
          rows="3"
          value={extraInfo}
          onChange={(event) => setExtraInfo(event.target.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => operationFarm()}
      >
        Submit
      </button>
    </form>
  );
}

export default AddFarm;
