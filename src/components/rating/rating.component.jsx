import { ReactComponent as Star } from "../../images/icon-star.svg";
import {
  RatingContainer,
  Title,
  Para,
  NumbersContainer,
  Submit,
} from "./rating.styles";

const RatingPage = ({ submitHandler, ratingsHandler, rating }) => {
  const rateArr = [1, 2, 3, 4, 5];

  return (
    <RatingContainer>
      <div className="star">
        <Star />
      </div>
      <Title>How did we do?</Title>
      <Para>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Para>
      <NumbersContainer>
        {rateArr.map((rate, i) => {
          return (
            <button
              onClick={() => ratingsHandler(rate)}
              key={i}
              className={
                rating === rate
                  ? "ratings-button ratings-button-active"
                  : "ratings-button"
              }
            >
              {rate}
            </button>
          );
        })}
      </NumbersContainer>
      <Submit onClick={submitHandler}>Submit</Submit>
    </RatingContainer>
  );
};

export default RatingPage;
