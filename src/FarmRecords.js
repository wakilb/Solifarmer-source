import farmsData from "./farm-data";

function FarmRecords() {
  return (
    <>
      <table className="table table-hover" id="farm-records">
        <thead>
          <tr>
            <th>pH</th>
            <th>Temperature</th>
            <th>Rainfall</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {farmsData.map((farmData, key) => (
            <tr key={key}>
              <td>{farmData.location}</td>
              <td>{farmData.location}</td>
              <td>{farmData.location}</td>
              <td>{farmData.datetime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FarmRecords;
