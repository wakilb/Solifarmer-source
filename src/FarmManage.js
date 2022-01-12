function FarmManage() {
  return (
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text">Date</span>
        <input type="date" min="1" className="form-control" aria-label="" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">pH</span>
        <input type="number" min="1" className="form-control" aria-label="" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Temperature</span>
        <input type="number" min="1" className="form-control" aria-label="" />
        <span className="input-group-text">C</span>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">Rainfall</span>
        <input type="number" min="1" className="form-control" aria-label="" />
        <span className="input-group-text">mm</span>
      </div>

      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupCSVFile">
          CSV file
        </label>
        <input type="file" className="form-control" id="inputGroupCSVFile" />
      </div>

      <button type="submit" className="btn btn-primary">
        Add More
      </button>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default FarmManage;
