
// src/components/AddMovie.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
    synopsis: "",
    poster: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Added:", movie);
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <input type="text" name="director" placeholder="Director" onChange={handleChange} required />
        <select name="genre" onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input type="number" name="year" placeholder="Release Year" onChange={handleChange} required />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange}></textarea>
        <input type="url" name="poster" placeholder="Poster Image URL" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
