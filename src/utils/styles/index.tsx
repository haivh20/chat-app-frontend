import styled from "styled-components";

export const InputField = styled.input`
  background-color: inherit;
  color: #fff;
  outline: none;
  border: none;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 4px 0;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  display: block;
  background-color: #2b09ff;
  outline: none;
  border: none;
  color: #ffff;
  font-size: 18px;
  border-radius: 10px;
  padding: 18px;

  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: #1c00d1;
  }
`;

export const Page = styled.div`
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
`;
