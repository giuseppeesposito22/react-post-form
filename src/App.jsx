import { useState } from "react";
import axios from "axios";

function App() {
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };

  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    e.target.type === "checkbox"
      ? setFormData({ ...formData, [e.target.name]: e.target.checked })
      : setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post(apiUrl, formData).then((res) => console.log(res.data));
  };

  return (
    <>
      <h1>React Project</h1>

      <form className="form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="input-Author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="textarea-Form">
          <textarea
            className="textarea w-100"
            placeholder="Write text..."
            id="body"
            name="body"
            value={formData.body}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="public"
            name="public"
            checked={formData.public}
            onChange={handleInputChange}
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
