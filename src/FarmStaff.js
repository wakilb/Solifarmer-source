import usersData from "./user-data";

function FarmStaff() {
  return (
    <table className="table table-borderless" id="staff-list">
      <thead>
        <tr>
          <th>Owners</th>
          <th>Staff</th>
          <th>Visitor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {usersData.map((userData) => (
            <>
              <td>{userData.role === "Owner" && userData.name}</td>
              <td>{userData.role === "Staff" && userData.name}</td>
              <td>{userData.role === "Visitor" && userData.name}</td>
            </>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default FarmStaff;
