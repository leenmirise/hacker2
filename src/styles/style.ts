import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  padding-left: 90px;
  padding-right: 90px;
  border-bottom: 5px solid #90d0d0;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 2px solid #90d0d0;
  padding: 13px;
  width: 11rem;
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 5px;
  
  &:hover {
    filter: brightness(0.85);
  }
`;

export const Card = styled.div`
  min-height: 150px;
  border: 3px solid #90d0d0;
  border-radius: 5px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-left: 20px;
`;

export const CardText = styled.p`
  color: grey;
`;

export const Line = styled.hr`
  border: 2px dotted #90d0d0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Comments = styled.div`
  min-height: 150px;
  border: 3px solid #90d0d0;
  border-radius: 5px;
  width: 95%;
  margin-bottom: 10px;
  padding-right: 10px;
  margin-right: auto;
  margin-left: auto;
`;

