import { ReactComponent as ThankYouImg } from "../../images/illustration-thank-you.svg";
import { ThanksContainer } from "./thanks.styles";

const Thanks = ({ rating }) => {
  return (
    <ThanksContainer>
      <div className="img-container">
        <ThankYouImg />
      </div>
      <div className="rating-container">
        <p>You selected {rating} out of 5</p>
      </div>
      <h2>Thank you!</h2>
      <p className="thanks-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </ThanksContainer>
  );
};

export default Thanks;
