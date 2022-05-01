import { useState, useEffect } from "react";

import RatingPage from "./components/rating/rating.component";
import Thanks from "./components/thanks/thanks.component";

import "./App.css";

function App() {
  const [rating, setRating] = useState("");
  const [submit, setSubmit] = useState(false);

  const submitHandler = () => {
    setSubmit(true);
  };

  const ratingsHandler = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      {submit ? (
        <Thanks rating={rating} />
      ) : (
        <RatingPage
          submitHandler={submitHandler}
          ratingsHandler={ratingsHandler}
          rating={rating}
        />
      )}
    </div>
  );
}

export default App;
