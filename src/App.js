import { useState, useEffect } from "react";

import RatingPage from "./components/rating/rating.component";

import "./App.css";

function App() {
  const [rating, setRating] = useState("");
  const [submit, setSubmit] = useState(false);

  const submitHandler = () => {};

  const ratingsHandler = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <RatingPage ratingsHandler={ratingsHandler} rating={rating} />
    </div>
  );
}

export default App;
