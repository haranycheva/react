import styled from "styled-components";

function checkIfShown(res, rej){
    return ({isShown}) => {
        return isShown ? res : rej;
    }
}

export const Li = styled.li`
  width: 100%;
  padding: 15px;
  background-color: ${checkIfShown("#6b4e71", "#ff4e71")};
  color: #fff;
  font-size: 24px;
  position: relative;
  cursor: pointer;
  &:after {
    content: ${checkIfShown('"-"', '"+"')};
    font-weight: 600;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 10px;
  }
`;



export const ItemText = styled.p`
  margin-top: 10px;
`;
