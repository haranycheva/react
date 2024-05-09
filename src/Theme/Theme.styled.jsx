import { colorsTheme } from "constants";
import styled from "styled-components";

const getColorTheme = (colorName, stage) => {
    let color = colorName;
    if(stage) {
        color = colorName === "light" ? "dark" : "light";
    }
    return colorsTheme[color] ?? colorsTheme.dark;
}



export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => getColorTheme(theme)};
`;

export const BtnTheme = styled.button`
  padding: 20px 50px;
  background-color: ${({theme}) => getColorTheme(theme, true)};
  border-radius: 15px;
  cursor: pointer;
  color: ${({theme}) => getColorTheme(theme)};
`;
