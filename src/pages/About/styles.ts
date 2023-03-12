import styled from 'styled-components';

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 40px 0 100px 0;
  color: rgb(194, 194, 194);

  * {
    &::selection {
      background-color: #c90000;
      color: white;
    }
  }

  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 300;
  }

  h2 {
    font-size: 36px;
    font-weight: 500;
  }

  h3 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 400;
  }

  p {
    margin: 10px 0;
    text-align: justify;
    font-size: 18px;
    line-height: 29px;
  }
`;

export const Image = styled.img`
  height: 350px;
  width: 700px;
  border-radius: 12px;
  object-fit: cover;
  filter: brightness(1.4);
`;

export const Specifics = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: rgb(110, 110, 110);
      font-size: 16px;
    }
  }
`;

export const Number = styled.div`
  font-size: 60px;
  font-weight: 300;
`;

export const SkillSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
`;

export const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 350px;
  padding: 25px 35px;
  border-radius: 12px;
  border: 2px solid rgb(40, 40, 40);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    font-size: 17px;
  }

  svg {
    height: 40px;
    width: 40px;
  }
`;
