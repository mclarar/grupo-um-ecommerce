import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 0.4rem 0.4rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.5rem;
  width: 90%;
  height: 18rem;
  box-shadow: 2px 3px 30px 2px white;
  margin: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  background-color: rgb(55, 55, 55);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  object-fit: cover;
  transform: scale(1);
  &:hover {
    background-color: #c793e1;
    color: #fff;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const topCard = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
`;
export const topCardImage = styled.img`
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const bottomCard = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0%;
`;
