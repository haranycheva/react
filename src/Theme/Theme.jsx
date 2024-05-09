import { useState } from "react";
import { BtnTheme, Page } from "./Theme.styled";
import useLocalStorage from "hooks/useLocalStorage";

export function Theme() {
    const [value, setValue] = useLocalStorage("theme", "dark")
    const handleClick = () => {
        setValue(state => (state === "dark" ? "light" : "dark"))
    }
  return (
    <>
      <Page theme={value}>
        <BtnTheme onClick={handleClick} theme={value}>change theme</BtnTheme>
      </Page>
    </>
  );
}
