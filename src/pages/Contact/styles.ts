import styled from 'styled-components';

export const StyledContact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px;
  border: 2px solid rgb(28, 28, 28);
  border-radius: 20px;
`;

export const ImageHolder = styled.div`
  height: 100px;
  width: 100px;
  background-color: white;
  border-radius: 50%;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const Option = styled.div`
  padding: 14px 18px;
  font-size: 14px;
  border: 2px solid rgb(28, 28, 28);
  border-radius: 17px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: rgb(97, 97, 97);
    border-color: rgb(37, 37, 37);
  }
`;
