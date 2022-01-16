import DataTable from "react-data-table-component";
import React, { useState } from "react";
import * as XLSX from "xlsx";

function FarmManage() {
  let valideList = null;
  let invalidRecords;
  const columns = [
    { name: "Farm name", selector: "location" },
    { name: "Record Date", selector: "datetime" },
    { name: "Metric", selector: "sensorType" },
    { name: "Value", selector: "value" },
  ];

  const [data, setData] = useState([]);

  // process CSV data
  const processData = (dataString) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }
    /* Filter List */
    valideList = list.filter(filterInvalidRecords);

    setData(list);
  };

  // handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  };

  //Validate data
  const filterInvalidRecords = (record) => {
    if (record.sensorType === "pH") {
      if (
        Number.isFinite(record.id) &&
        parseInt(record.value) > 0 &&
        parseInt(record.value) < 14
      ) {
        console.log(record);
        return true;
      }
    }
    if (record.sensorType === "rainFall") {
      if (
        Number.isFinite(record.id) &&
        record.value > -0 &&
        record.value < 500
      ) {
        return true;
      }
    }
    if (record.sensorType === "temperature") {
      if (
        Number.isFinite(record.id) &&
        record.value > -50 &&
        record.value < 100
      ) {
        return true;
      }
    }
    invalidRecords++;
    return false;
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col-5 ms-auto me-auto p-4">
          <div className="input-group mb-3">
            <span className="input-group-text">Date</span>
            <input type="date" min="1" className="form-control" aria-label="" />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">pH</span>
            <input
              type="number"
              min="1"
              className="form-control"
              aria-label=""
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Temperature</span>
            <input
              type="number"
              min="1"
              className="form-control"
              aria-label=""
            />
            <span className="input-group-text">C</span>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Rainfall</span>
            <input
              type="number"
              min="1"
              className="form-control"
              aria-label=""
            />
            <span className="input-group-text">mm</span>
          </div>

          <button type="submit" className="btn btn-primary">
            Add More
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <span className=" col-1 offset-1 mt-4 border-start border-dark"></span>
        <div className="col-5 ms-auto me-auto p-4">
          <div>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 m-auto p-2">
          <DataTable
            pagination
            highlightOnHover
            columns={columns}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}

export default FarmManage;
