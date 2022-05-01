import styled from "styled-components";

export const ThanksContainer = styled.div`
  background: linear-gradient(24deg, hsl(216, 12%, 8%), hsl(213, 19%, 18%));
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  width: 400px;
  padding: 20px;

  .img-container{

      margin:20px auto;
  }

  .rating-container{
color:hsl(25, 97%, 53%);
background-color: hsl(213, 19%, 18%);
border-radius: 100px;
padding: 8px 20px;
margin-bottom: 40px;

  }
  

  h2{
      color: white;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 15px;
  }

  .thanks-text{
      color: hsl(217, 12%, 63%);
      line-height: 1.5;
      text-align: center;
  }
  }
`;
