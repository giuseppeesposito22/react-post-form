function App() {
  return (
    <>
      <h1>React Project</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="input-Author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="input-Author"
            value={""}
            onChange={() => {}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            value={""}
            onChange={() => {}}
          />
        </div>

        <div className="textarea-Form">
          <textarea
            className="textarea w-100"
            placeholder="Write text..."
            id="textareaBio"
            value={""}
            onChange={() => {}}
          ></textarea>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="visibilityCheckbox"
            checked={""}
            onChange={() => {}}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Public
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
