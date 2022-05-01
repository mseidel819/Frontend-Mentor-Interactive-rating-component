import styled from "styled-components";

export const RatingContainer = styled.div`
  background: linear-gradient(24deg, hsl(216, 12%, 8%), hsl(213, 19%, 18%));
  justify-content: left;
  border-radius: 30px;
  width: 330px;
  padding: 20px;

  .star {
    background-color: hsl(213, 19%, 18%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10000px;

    margin-bottom: 24px;
  }
`;

export const Title = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 12px;
`;

export const Para = styled.p`
  color: hsl(217, 12%, 63%);
  margin-bottom: 32px;
  line-height: 1.5;
  font-size: 14px;
`;

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .ratings-button {
    border: none;
    background-color: hsl(213, 19%, 18%);
    color: hsl(217, 12%, 63%);
    font-size: 18px;
    border-radius: 100000px;
    height: 50px;
    width: 50px;
    margin-bottom: 24px;
    cursor: pointer;
  }

  .ratings-button:hover {
    background-color: hsl(25, 97%, 53%);
    color: white;
  }

  .ratings-button-active {
    background-color: hsl(216, 12%, 54%);
    color: white;
  }
`;

export const Submit = styled.button`
  border: none;
  background-color: hsl(25, 97%, 53%);
  color: white;
  width: 100%;
  height: 45px;
  border-radius: 10000px;
  margin-bottom: 20px;

  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.5px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: white;
    color: hsl(25, 97%, 53%);
  }
`;
