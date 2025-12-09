import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px;
`;

export const Box = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
`;

export const Title = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 15px;
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.color || "#11CCF4"};
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    opacity: 0.9;
  }
`;
