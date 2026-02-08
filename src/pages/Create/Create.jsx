import { useState } from "react";
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [metode, setMetode] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(title, metode, cookingTime);
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => {
              setMetode(e.target.value);
            }}
            value={metode}
            required
          />
        </label>

        <label>
          <span>Cooking Time(m):</span>
          <input
            type="number"
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
